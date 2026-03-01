// TKD Class Planner - Generation Logic

// State
let currentSettings = {
    duration: 60,
    group: 'adults',
    size: 'small'
};

// Activity count by duration
const ACTIVITY_COUNTS = {
    30: { min: 1, max: 2 },
    60: { min: 2, max: 3 },
    90: { min: 3, max: 4 }
};

// Time allocation (approximate minutes per activity based on duration)
const TIME_ALLOCATION = {
    30: { min: 12, max: 18 },
    60: { min: 15, max: 25 },
    90: { min: 18, max: 25 }
};

// Push zone probability boost
const PUSH_ZONE_BOOST = 1.8;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initOptionButtons();
    initGenerateButton();
    initRefreshButton();
});

function initOptionButtons() {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const group = this.dataset.group;
            const value = this.dataset.value;

            // Remove selected from siblings
            document.querySelectorAll(`[data-group="${group}"]`).forEach(b => {
                b.classList.remove('selected');
            });

            // Add selected to clicked
            this.classList.add('selected');

            // Update settings
            if (group === 'duration') {
                currentSettings.duration = parseInt(value);
            } else {
                currentSettings[group] = value;
            }
        });
    });
}

function initGenerateButton() {
    document.getElementById('generateBtn').addEventListener('click', generatePlan);
}

function initRefreshButton() {
    document.getElementById('refreshBtn').addEventListener('click', generatePlan);
}

function generatePlan() {
    const plan = selectActivities();
    displayPlan(plan);
}

function selectActivities() {
    const { duration, group, size } = currentSettings;
    const counts = ACTIVITY_COUNTS[duration];
    const timeAlloc = TIME_ALLOCATION[duration];

    // Get all activities suitable for this group
    let pool = getAllActivities().filter(a => a.suitability.includes(group));

    // Decide how many activities (with slight randomness)
    const numActivities = Math.random() < 0.5 ? counts.min : counts.max;

    // Ensure we get variety: pick from different categories
    const selected = [];
    const usedCategories = new Set();

    // First, ensure at least one push-zone activity for adults/mixed (usually)
    if ((group === 'adults' || group === 'mixed') && Math.random() < 0.7) {
        const pushPool = pool.filter(a => a.pushZone);
        if (pushPool.length > 0) {
            const pushActivity = weightedRandomPick(pushPool, true);
            selected.push(pushActivity);
            usedCategories.add(pushActivity.category);
            pool = pool.filter(a => a !== pushActivity);
        }
    }

    // Fill remaining slots with variety
    while (selected.length < numActivities && pool.length > 0) {
        // Prefer categories not yet used
        let candidates = pool.filter(a => !usedCategories.has(a.category));
        if (candidates.length === 0) {
            candidates = pool;
        }

        const activity = weightedRandomPick(candidates, false);
        selected.push(activity);
        usedCategories.add(activity.category);
        pool = pool.filter(a => a !== activity);
    }

    // Shuffle the order (so push-zone isn't always first)
    shuffleArray(selected);

    // Assign times that sum close to duration
    const totalTargetTime = duration;
    assignTimes(selected, totalTargetTime, timeAlloc);

    return selected;
}

function weightedRandomPick(activities, preferPush) {
    // Create weighted array
    const weights = activities.map(a => {
        let weight = 1;
        if (a.pushZone && preferPush) {
            weight *= PUSH_ZONE_BOOST;
        }
        return weight;
    });

    const totalWeight = weights.reduce((a, b) => a + b, 0);
    let random = Math.random() * totalWeight;

    for (let i = 0; i < activities.length; i++) {
        random -= weights[i];
        if (random <= 0) {
            return activities[i];
        }
    }

    return activities[activities.length - 1];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function assignTimes(activities, totalTime, timeAlloc) {
    const n = activities.length;

    // Calculate fair share per activity
    const baseTimePerActivity = totalTime / n;

    // First pass: assign times proportionally, respecting activity constraints loosely
    let assigned = activities.map(activity => {
        // For single activities, they should fill the whole time
        // For multiple, distribute more evenly
        return baseTimePerActivity;
    });

    // Adjust to ensure total matches exactly
    let currentTotal = assigned.reduce((a, b) => a + b, 0);

    // Distribute any rounding differences
    if (currentTotal !== totalTime) {
        const diff = totalTime - currentTotal;
        assigned[0] += diff;
    }

    // Round to whole minutes and assign
    activities.forEach((activity, index) => {
        activity.assignedTime = Math.round(assigned[index]);
    });

    // Final adjustment to hit exact target
    let finalTotal = activities.reduce((sum, a) => sum + a.assignedTime, 0);
    if (finalTotal !== totalTime) {
        activities[activities.length - 1].assignedTime += (totalTime - finalTotal);
    }
}

function displayPlan(activities) {
    const container = document.getElementById('planContainer');
    const list = document.getElementById('activitiesList');
    const meta = document.getElementById('planMeta');
    const totalTimeEl = document.getElementById('totalTime');

    // Show container
    container.classList.add('visible');

    // Update meta
    const groupLabel = {
        kids: 'Kids (white–black)',
        adults: 'Adults (BB–4th dan)',
        mixed: 'Mixed levels'
    };
    meta.textContent = `${currentSettings.duration} min • ${groupLabel[currentSettings.group]} • ${currentSettings.size === 'small' ? 'Small class' : 'Medium class'}`;

    // Clear and rebuild list
    list.innerHTML = '';

    let totalMinutes = 0;

    activities.forEach((activity, index) => {
        totalMinutes += activity.assignedTime;

        const card = document.createElement('div');
        card.className = 'activity-card' + (activity.pushZone ? ' push-zone' : '');

        card.innerHTML = `
            <div class="activity-main">
                <div>
                    <div class="activity-name">
                        ${index + 1}. ${activity.name}
                        ${activity.pushZone ? '<span class="push-badge">Push Zone</span>' : ''}
                    </div>
                    <div class="activity-category">${activity.category}</div>
                </div>
                <div style="display: flex; align-items: center;">
                    <span class="activity-time">${activity.assignedTime} min</span>
                    <span class="expand-icon">▼</span>
                </div>
            </div>
            <div class="activity-details">
                ${activity.details ? buildDetailsHTML(activity.details) : ''}
            </div>
        `;

        // Toggle expand
        card.querySelector('.activity-main').addEventListener('click', function() {
            card.classList.toggle('expanded');
        });

        list.appendChild(card);
    });

    totalTimeEl.innerHTML = `<strong>Total: ${totalMinutes} min</strong> (target: ${currentSettings.duration} min)`;

    // Scroll to plan
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function buildDetailsHTML(details) {
    let html = '';

    if (details.description) {
        html += `
            <div class="detail-section">
                <div class="detail-label">Description</div>
                <div class="detail-content">${details.description}</div>
            </div>
        `;
    }

    if (details.variations && details.variations.length > 0) {
        html += `
            <div class="detail-section">
                <div class="detail-label">Variations</div>
                <div class="detail-content">
                    <ul>
                        ${details.variations.map(v => `<li>${v}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    if (details.coachingCues) {
        html += `
            <div class="detail-section">
                <div class="detail-label">Coaching Cues</div>
                <div class="detail-content">${details.coachingCues}</div>
            </div>
        `;
    }

    return html;
}
