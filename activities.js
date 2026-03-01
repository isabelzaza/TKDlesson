// Activity Database for TKD Class Planner
// Each activity has: name, category, minTime, maxTime, suitability, details, pushZone

const ACTIVITIES = {

    // ============== FORMS ==============
    forms: [
        // Palgwe forms
        {
            name: "Palgwe 1-3 Review",
            category: "Forms",
            minTime: 8,
            maxTime: 12,
            suitability: ["kids", "mixed"],
            details: {
                description: "Run through beginner Palgwe forms with emphasis on stances and chambering.",
                variations: [
                    "Mirror mode: perform facing partner",
                    "Slow motion: 4-count per technique",
                    "Eyes closed on final rep"
                ],
                coachingCues: "Watch for proper front stance depth, hip rotation on blocks"
            }
        },
        {
            name: "Palgwe 4-6 Deep Dive",
            category: "Forms",
            minTime: 10,
            maxTime: 15,
            suitability: ["kids", "adults", "mixed"],
            details: {
                description: "Focus on intermediate Palgwe forms—transitions and power generation.",
                variations: [
                    "Segment breakdown: practice difficult sequences in isolation",
                    "Speed variations: slow/medium/full power",
                    "Application focus: pause at key moves, discuss bunkai"
                ],
                coachingCues: "Emphasize knifehand chamber position, back stance weight distribution"
            }
        },
        {
            name: "Palgwe 7-8 Polish",
            category: "Forms",
            minTime: 12,
            maxTime: 18,
            suitability: ["adults", "mixed"],
            details: {
                description: "Advanced Palgwe refinement with attention to rhythm and breathing.",
                variations: [
                    "Breathing sync: exhale on every strike",
                    "Performance mode: full intensity as if testing",
                    "Teaching mode: each person explains one section"
                ],
                coachingCues: "Jump in Palgwe 8 should be compact; double knifehand needs snap"
            }
        },
        // Tang Soo Do forms
        {
            name: "Tang Soo Do Form Focus",
            category: "Forms",
            minTime: 10,
            maxTime: 15,
            suitability: ["adults", "mixed"],
            details: {
                description: "Practice selected Tang Soo Do hyung—Pyung Ahn or Bassai series.",
                variations: [
                    "Compare/contrast with Taegeuk equivalents",
                    "Historical context discussion",
                    "Application breakdown for key sequences"
                ],
                coachingCues: "Note different stance conventions; Tang Soo Do often uses longer stances"
            }
        },
        // Yudanja
        {
            name: "Koryo Refinement",
            category: "Forms",
            minTime: 12,
            maxTime: 18,
            suitability: ["adults"],
            details: {
                description: "Black belt form with focus on the unique Koryo techniques.",
                variations: [
                    "Slow-motion arc hand sequence",
                    "Target visualization on each strike",
                    "Side-by-side comparison: old vs. new Koryo"
                ],
                coachingCues: "Arc hand strike should follow a true arc, not a slap"
            }
        },
        {
            name: "Keumgang Practice",
            category: "Forms",
            minTime: 12,
            maxTime: 18,
            suitability: ["adults"],
            details: {
                description: "Diamond mountain form—emphasizing the powerful keumgang blocks.",
                variations: [
                    "Hold each keumgang block position for 3 breaths",
                    "Slow crane stance sequences",
                    "Partner pressure test on stances"
                ],
                coachingCues: "Crane stance knee should be high; diamond block arms at correct angles"
            }
        },
        {
            name: "Taebaek or Pyongwon",
            category: "Forms",
            minTime: 12,
            maxTime: 18,
            suitability: ["adults"],
            details: {
                description: "3rd/4th dan forms focusing on precision and power.",
                variations: [
                    "Video review: record and critique",
                    "Segment isolation for problem areas",
                    "Full power run-through with kihap on every technique"
                ],
                coachingCues: "Taebaek: watch jumping front kick landing; Pyongwon: elbow strikes need hip"
            }
        },
        {
            name: "Sipjin Exploration",
            category: "Forms",
            minTime: 15,
            maxTime: 20,
            suitability: ["adults"],
            details: {
                description: "Ten symbols form—complex techniques requiring flow.",
                variations: [
                    "Section-by-section teaching for those still learning",
                    "Full performance mode",
                    "Slow motion with verbal technique calling"
                ],
                coachingCues: "Circular movements should be continuous; stances must remain grounded"
            }
        },
        // Exploration forms
        {
            name: "Nahanchi Series",
            category: "Forms",
            minTime: 15,
            maxTime: 22,
            suitability: ["adults"],
            pushZone: true,
            details: {
                description: "Okinawan-rooted horse stance forms—excellent for hip and core development.",
                variations: [
                    "Nahanchi 1 only (beginners to this form)",
                    "All three in sequence",
                    "With partner: test stances under pressure",
                    "Application study: close-range fighting"
                ],
                coachingCues: "Horse stance should be active, not passive; knees drive outward"
            }
        },
        {
            name: "Nijushiho Study",
            category: "Forms",
            minTime: 15,
            maxTime: 22,
            suitability: ["adults"],
            pushZone: true,
            details: {
                description: "24-step form from Shotokan lineage—fluid and technical.",
                variations: [
                    "Learning mode: walk through with reference",
                    "Rhythm focus: varying tempo within the form",
                    "Application analysis for unique sequences"
                ],
                coachingCues: "Wave-like motions should feel connected; avoid segmenting the flow"
            }
        },
        {
            name: "New Form Introduction",
            category: "Forms",
            minTime: 15,
            maxTime: 25,
            suitability: ["adults"],
            pushZone: true,
            details: {
                description: "Learn opening sequences of a form new to the group (instructor's choice).",
                variations: [
                    "Chinto/Gankaku introduction",
                    "Seisan/Hangetsu basics",
                    "Kusanku/Kanku-dai overview"
                ],
                coachingCues: "Focus on gross movements first; refinement comes with repetition"
            }
        }
    ],

    // ============== SPARRING DRILLS ==============
    sparring: [
        {
            name: "3-Step Sparring (Sambo Gyorugi)",
            category: "Sparring Drills",
            minTime: 8,
            maxTime: 12,
            suitability: ["kids", "mixed"],
            details: {
                description: "Traditional 3-step attack/defense sequence—builds timing and distance.",
                variations: [
                    "Punch attacks only",
                    "Kick attacks (front kick, roundhouse)",
                    "Defender must counter after final block"
                ],
                coachingCues: "Attacker: committed attacks at proper distance. Defender: don't anticipate"
            }
        },
        {
            name: "1-Step Sparring (Ilbo Gyorugi)",
            category: "Sparring Drills",
            minTime: 10,
            maxTime: 15,
            suitability: ["kids", "adults", "mixed"],
            details: {
                description: "Single attack with immediate defense and counter.",
                variations: [
                    "Assigned techniques (same counter for all)",
                    "Free choice counter",
                    "Must include takedown or sweep",
                    "Counter must be a kick"
                ],
                coachingCues: "Timing is everything—block and counter should feel like one motion"
            }
        },
        {
            name: "Reaction Sparring",
            category: "Sparring Drills",
            minTime: 10,
            maxTime: 15,
            suitability: ["kids", "adults", "mixed"],
            details: {
                description: "One partner moves; other must react with appropriate technique.",
                variations: [
                    "Lead leg fakes → defender checks or counters",
                    "Jab feints → defender slips and counters",
                    "Random attack → appropriate defense"
                ],
                coachingCues: "Stay relaxed; tension kills reaction speed"
            }
        },
        {
            name: "Point Sparring Rounds",
            category: "Sparring Drills",
            minTime: 12,
            maxTime: 18,
            suitability: ["kids", "adults", "mixed"],
            details: {
                description: "Light contact point sparring with focus on clean technique.",
                variations: [
                    "Kicks only",
                    "Must score with non-dominant side",
                    "Only spinning techniques count double",
                    "First to 3 points, then rotate"
                ],
                coachingCues: "Control is paramount; speed without control doesn't count"
            }
        },
        {
            name: "Continuous Light Sparring",
            category: "Sparring Drills",
            minTime: 12,
            maxTime: 18,
            suitability: ["adults", "mixed"],
            details: {
                description: "Flowing sparring at 30-50% power—technical development over scoring.",
                variations: [
                    "2-minute rounds with rotation",
                    "Theme rounds: only body kicks, only to the head, etc.",
                    "King of the hill: winner stays"
                ],
                coachingCues: "Match your partner's intensity; this is practice, not competition"
            }
        },
        {
            name: "Attack-Defense Switches",
            category: "Sparring Drills",
            minTime: 8,
            maxTime: 12,
            suitability: ["kids", "adults", "mixed"],
            pushZone: true,
            details: {
                description: "Timed rounds where roles switch: 30 sec attack only, 30 sec defend only.",
                variations: [
                    "Attacker unlimited techniques, defender blocks only",
                    "Attacker: 3-kick combos; defender: footwork evasion only",
                    "Add counter-attacks in defend phase"
                ],
                coachingCues: "Attackers: pressure but don't chase. Defenders: manage distance, don't retreat linearly"
            }
        },
        {
            name: "Angle Sparring",
            category: "Sparring Drills",
            minTime: 10,
            maxTime: 15,
            suitability: ["adults", "mixed"],
            pushZone: true,
            details: {
                description: "Focus on attacking and defending from angles rather than straight lines.",
                variations: [
                    "Step 45° before every attack",
                    "Circle drill: constant lateral movement",
                    "Pivot counter: after defending, pivot and counter from new angle"
                ],
                coachingCues: "Hips face target even when feet move laterally; don't square up"
            }
        },
        {
            name: "Counter-Fighter Drill",
            category: "Sparring Drills",
            minTime: 10,
            maxTime: 15,
            suitability: ["adults"],
            pushZone: true,
            details: {
                description: "One partner attacks; defender focuses entirely on timing counters.",
                variations: [
                    "Cut kick counters (stop kick to thigh)",
                    "Spin counter: must answer every attack with a spinning technique",
                    "Punching counters only"
                ],
                coachingCues: "Counters work on timing, not speed. Read the setup, not the technique"
            }
        }
    ],

    // ============== KICKING ON PADS ==============
    kicking: [
        {
            name: "Basic Kick Warm-Up",
            category: "Kicking",
            minTime: 8,
            maxTime: 12,
            suitability: ["kids", "mixed"],
            details: {
                description: "Front kick, roundhouse, side kick on shields—building volume and form.",
                variations: [
                    "10 each leg, 3 rounds",
                    "Holder calls which kick",
                    "Add speed: how many in 30 seconds?"
                ],
                coachingCues: "Chamber every kick; no lazy legs. Rechamber before putting foot down"
            }
        },
        {
            name: "Power Round Kicks",
            category: "Kicking",
            minTime: 10,
            maxTime: 15,
            suitability: ["kids", "adults", "mixed"],
            details: {
                description: "Focus on maximum power generation for roundhouse kicks.",
                variations: [
                    "Standing power: plant and pivot",
                    "Step-in power: slide forward into kick",
                    "Switch kick power: rear leg becomes lead"
                ],
                coachingCues: "Power comes from hip rotation and pivot foot; not from leaning back"
            }
        },
        {
            name: "Kick Combinations",
            category: "Kicking",
            minTime: 10,
            maxTime: 15,
            suitability: ["kids", "adults", "mixed"],
            details: {
                description: "2-3 kick combinations on pads, building flow and endurance.",
                variations: [
                    "Jab-cross-round kick",
                    "Round-round-back kick",
                    "Front kick-round kick-side kick",
                    "Low-high round kick same leg"
                ],
                coachingCues: "Each kick sets up the next; don't reset stance between kicks"
            }
        },
        {
            name: "Target Calling Drill",
            category: "Kicking",
            minTime: 10,
            maxTime: 15,
            suitability: ["kids", "adults", "mixed"],
            details: {
                description: "Holder shows targets at random; kicker must react with correct technique.",
                variations: [
                    "High/low targets",
                    "Moving target (holder circles)",
                    "Fake targets (show and pull away)"
                ],
                coachingCues: "Stay bouncing; flat feet kill reaction time"
            }
        },
        {
            name: "Spinning Kick Clinic",
            category: "Kicking",
            minTime: 12,
            maxTime: 18,
            suitability: ["adults", "mixed"],
            pushZone: true,
            details: {
                description: "Dedicated work on back kick, spinning hook, and wheel kick.",
                variations: [
                    "Back kick only: chamber, spot, thrust",
                    "Spinning hook: focus on heel contact",
                    "Wheel kick: full rotation, control height",
                    "Tornado kick: jump spin round kick"
                ],
                coachingCues: "Spot the target early in the spin; don't throw blind"
            }
        },
        {
            name: "Blitz Kicking (Endurance)",
            category: "Kicking",
            minTime: 8,
            maxTime: 12,
            suitability: ["adults", "mixed"],
            pushZone: true,
            details: {
                description: "High-volume kicking for conditioning—maintain technique under fatigue.",
                variations: [
                    "50 round kicks each leg (as fast as possible with form)",
                    "Tabata: 20 sec on, 10 sec rest, 8 rounds",
                    "Pyramid: 10-20-30-20-10 reps"
                ],
                coachingCues: "When tired, focus on ONE thing: chamber, or pivot, or rechamber"
            }
        },
        {
            name: "Axe Kick & Crescent Kicks",
            category: "Kicking",
            minTime: 10,
            maxTime: 15,
            suitability: ["adults", "mixed"],
            pushZone: true,
            details: {
                description: "Vertical kicking techniques often neglected in regular training.",
                variations: [
                    "Inside crescent to pad held at shoulder",
                    "Outside crescent as a block/strike",
                    "Axe kick: up-and-over trajectory",
                    "Combine: crescent into axe"
                ],
                coachingCues: "Axe kick power comes from the drop, not the lift. Lock knee on contact"
            }
        },
        {
            name: "Cut Kicks & Checking",
            category: "Kicking",
            minTime: 8,
            maxTime: 12,
            suitability: ["adults"],
            pushZone: true,
            details: {
                description: "Defensive kicks: low side kick (cut kick) and knee checks.",
                variations: [
                    "Partner advances, you cut kick to thigh",
                    "Check incoming round kick with raised knee",
                    "Combine check → immediate counter kick"
                ],
                coachingCues: "Cut kick aims at inner thigh; keep it low and fast"
            }
        }
    ],

    // ============== CONDITIONING ==============
    conditioning: [
        {
            name: "TKD Circuit Training",
            category: "Conditioning",
            minTime: 10,
            maxTime: 15,
            suitability: ["kids", "adults", "mixed"],
            details: {
                description: "Rotating stations mixing martial arts movements and general fitness.",
                variations: [
                    "4 stations, 1 min each, 2-3 rounds",
                    "Stations: kicking shield, burpees, plank, jump squats",
                    "Partner stations: one works, one rests"
                ],
                coachingCues: "Keep transitions snappy; rest is between rounds, not stations"
            }
        },
        {
            name: "Kick Stamina Builder",
            category: "Conditioning",
            minTime: 8,
            maxTime: 12,
            suitability: ["adults", "mixed"],
            pushZone: true,
            details: {
                description: "Extended kicking sets designed to build leg endurance.",
                variations: [
                    "Hold chamber, kick 10, hold chamber, kick 10",
                    "Slow kicks: 5-second up, 5-second down",
                    "Single leg: 30 kicks without putting foot down"
                ],
                coachingCues: "When the leg burns, that's when training starts. Keep height consistent"
            }
        },
        {
            name: "Core for Kickers",
            category: "Conditioning",
            minTime: 8,
            maxTime: 12,
            suitability: ["kids", "adults", "mixed"],
            details: {
                description: "Core exercises specifically benefiting kicking power and balance.",
                variations: [
                    "Leg raises → bicycle → plank hold",
                    "V-ups with chamber position",
                    "Russian twists → side planks",
                    "Hanging leg raises (if bar available)"
                ],
                coachingCues: "Lower back stays pressed to floor on leg raises; don't arch"
            }
        },
        {
            name: "Agility Ladder Drills",
            category: "Conditioning",
            minTime: 8,
            maxTime: 12,
            suitability: ["kids", "adults", "mixed"],
            pushZone: true,
            details: {
                description: "Footwork patterns for speed and coordination (ladder or tape lines).",
                variations: [
                    "In-in-out-out",
                    "Lateral shuffle",
                    "Icky shuffle",
                    "Add kicks at end of ladder"
                ],
                coachingCues: "Quiet feet; if you're stomping, you're slow"
            }
        },
        {
            name: "Partner Resistance Drills",
            category: "Conditioning",
            minTime: 8,
            maxTime: 12,
            suitability: ["adults", "mixed"],
            pushZone: true,
            details: {
                description: "Use partner bodyweight for resistance training.",
                variations: [
                    "Wheelbarrow walks",
                    "Partner push-ups (hands on partner's back)",
                    "Piggyback squats",
                    "Resistance band kicks (partner holds)"
                ],
                coachingCues: "Communication matters; increase resistance gradually"
            }
        }
    ],

    // ============== SELF-DEFENSE / ONE-STEPS ==============
    selfDefense: [
        {
            name: "Grab Escapes",
            category: "Self-Defense",
            minTime: 10,
            maxTime: 15,
            suitability: ["kids", "adults", "mixed"],
            details: {
                description: "Escaping common grabs: wrist, collar, bear hug.",
                variations: [
                    "Single wrist grab (same side, cross side)",
                    "Two-hand grab on one wrist",
                    "Collar grab with push",
                    "Bear hug from behind (arms pinned, arms free)"
                ],
                coachingCues: "Technique beats strength; find the weak point of the grip"
            }
        },
        {
            name: "Ho Sin Sul Applications",
            category: "Self-Defense",
            minTime: 12,
            maxTime: 18,
            suitability: ["adults", "mixed"],
            details: {
                description: "Traditional self-defense techniques with joint locks and takedowns.",
                variations: [
                    "Wrist lock entries from various grabs",
                    "Elbow control techniques",
                    "Standing arm bar",
                    "Takedown from front choke"
                ],
                coachingCues: "Control the elbow to control the person; wrist follows"
            }
        },
        {
            name: "Form Applications (Bunkai)",
            category: "Self-Defense",
            minTime: 12,
            maxTime: 18,
            suitability: ["adults", "mixed"],
            pushZone: true,
            details: {
                description: "Extract and drill practical applications from known forms.",
                variations: [
                    "Take a sequence from today's form, find the application",
                    "Knife-hand sequences as entries to throws",
                    "Low block as arm drag or leg sweep",
                    "Double-block combinations as two-person defense"
                ],
                coachingCues: "Forms are libraries of techniques; read them with imagination"
            }
        },
        {
            name: "Defense Against Strikes",
            category: "Self-Defense",
            minTime: 10,
            maxTime: 15,
            suitability: ["kids", "adults", "mixed"],
            details: {
                description: "Defend against punches, haymakers, and common street attacks.",
                variations: [
                    "Jab-cross defense: parry and counter",
                    "Haymaker defense: cover and clinch",
                    "Headlock escape",
                    "Defense against push"
                ],
                coachingCues: "Move offline first; blocking a straight attack head-on is risky"
            }
        },
        {
            name: "Ground Awareness",
            category: "Self-Defense",
            minTime: 10,
            maxTime: 15,
            suitability: ["adults"],
            pushZone: true,
            details: {
                description: "Basic ground survival: getting up safely, preventing mount.",
                variations: [
                    "Technical stand-up from ground",
                    "Shrimping to create space",
                    "Guard kicks from back",
                    "Sprawl and disengage"
                ],
                coachingCues: "Goal is always to get back to feet; we're not grapplers here"
            }
        }
    ],

    // ============== MOVEMENT GAMES ==============
    games: [
        {
            name: "Kick Tag",
            category: "Games",
            minTime: 5,
            maxTime: 10,
            suitability: ["kids", "mixed"],
            details: {
                description: "Tag variant where you must tag with a controlled kick to the leg/body.",
                variations: [
                    "Only round kicks count",
                    "Must use non-dominant leg",
                    "Freeze tag: tagged person must hold a kick chamber until freed"
                ],
                coachingCues: "Control is essential; anyone kicking too hard sits out"
            }
        },
        {
            name: "Reaction Ball/Pad",
            category: "Games",
            minTime: 5,
            maxTime: 10,
            suitability: ["kids", "adults", "mixed"],
            details: {
                description: "Partner drops ball/pad; other must catch or kick before second bounce.",
                variations: [
                    "Catch only (reaction training)",
                    "Must kick the falling pad",
                    "Random throw direction"
                ],
                coachingCues: "Stay on balls of feet; weight forward"
            }
        },
        {
            name: "Mirror Drill",
            category: "Games",
            minTime: 5,
            maxTime: 10,
            suitability: ["kids", "adults", "mixed"],
            details: {
                description: "One partner leads movement; other mirrors in real-time.",
                variations: [
                    "Footwork only",
                    "Add hand techniques",
                    "Add kicks",
                    "Switch leader on whistle"
                ],
                coachingCues: "Leaders: be unpredictable but possible to follow"
            }
        },
        {
            name: "Survival Sparring",
            category: "Games",
            minTime: 8,
            maxTime: 12,
            suitability: ["adults", "mixed"],
            details: {
                description: "One person in center; rotates out when tagged or after time limit.",
                variations: [
                    "King of the hill: winner stays",
                    "Shark tank: everyone attacks center person (controlled)",
                    "Gauntlet: face 3 fresh opponents in sequence"
                ],
                coachingCues: "Attackers control intensity to appropriate level"
            }
        },
        {
            name: "Technique Relay Race",
            category: "Games",
            minTime: 8,
            maxTime: 12,
            suitability: ["kids", "mixed"],
            details: {
                description: "Teams race while performing techniques: kicks, stances, forms sections.",
                variations: [
                    "Must do 5 round kicks on pad before running back",
                    "Perform Palgwe 1 at far end, run back, tag next",
                    "Obstacle course with stance requirements"
                ],
                coachingCues: "Technique quality matters; sloppy technique = restart that section"
            }
        },
        {
            name: "Four Corners Defense",
            category: "Games",
            minTime: 8,
            maxTime: 12,
            suitability: ["adults", "mixed"],
            pushZone: true,
            details: {
                description: "Defender in center; four attackers at corners take turns attacking.",
                variations: [
                    "Attackers announce before moving",
                    "Silent attacks: defender must sense",
                    "Two attackers at once"
                ],
                coachingCues: "Defender: keep moving, don't fixate on one direction"
            }
        },
        {
            name: "Footwork Chess",
            category: "Games",
            minTime: 8,
            maxTime: 12,
            suitability: ["adults"],
            pushZone: true,
            details: {
                description: "Partners try to step on each other's feet using only footwork and fakes.",
                variations: [
                    "Hands behind back",
                    "Add push with palm allowed",
                    "Only lateral movement"
                ],
                coachingCues: "Teaches distance management and angles better than any drill"
            }
        }
    ],

    // ============== HAND TECHNIQUES ==============
    handTechniques: [
        {
            name: "Punch Combinations on Pads",
            category: "Hand Techniques",
            minTime: 8,
            maxTime: 12,
            suitability: ["kids", "adults", "mixed"],
            pushZone: true,
            details: {
                description: "Boxing-inspired combinations adapted for TKD.",
                variations: [
                    "Jab-cross-hook",
                    "Jab-cross-uppercut",
                    "Jab-jab-cross-hook-cross",
                    "Add round kick at end of each combo"
                ],
                coachingCues: "Hands return to guard after every strike; don't drop them"
            }
        },
        {
            name: "Traditional Hand Strikes",
            category: "Hand Techniques",
            minTime: 10,
            maxTime: 15,
            suitability: ["adults", "mixed"],
            pushZone: true,
            details: {
                description: "Beyond punches: knifehand, ridgehand, spearhand, hammer fist.",
                variations: [
                    "Knifehand strike to neck (controlled)",
                    "Ridgehand to temple (on pad)",
                    "Hammer fist from various angles",
                    "Backfist combinations"
                ],
                coachingCues: "These techniques are in the forms for a reason; train them"
            }
        },
        {
            name: "Elbow Strikes",
            category: "Hand Techniques",
            minTime: 8,
            maxTime: 12,
            suitability: ["adults"],
            pushZone: true,
            details: {
                description: "Close-range elbow techniques for self-defense application.",
                variations: [
                    "Horizontal elbow to pad",
                    "Upward elbow (uppercut equivalent)",
                    "Downward elbow",
                    "Spinning back elbow"
                ],
                coachingCues: "Power comes from hip rotation and weight shift, not arm swing"
            }
        },
        {
            name: "Hand Speed Drills",
            category: "Hand Techniques",
            minTime: 8,
            maxTime: 12,
            suitability: ["kids", "adults", "mixed"],
            pushZone: true,
            details: {
                description: "Focus mitt work for hand speed and accuracy.",
                variations: [
                    "Speed rounds: most punches in 15 seconds",
                    "Accuracy: hit moving target",
                    "Reaction: throw when mitt flashes",
                    "Pattern: holder calls numbers for combos"
                ],
                coachingCues: "Fast hands come from relaxation, not tension. Tense up only on impact"
            }
        }
    ]
};

// Helper function to get all activities as flat array
function getAllActivities() {
    let all = [];
    for (const category in ACTIVITIES) {
        all = all.concat(ACTIVITIES[category]);
    }
    return all;
}

// Helper to filter by suitability
function filterBySuitability(activities, group) {
    return activities.filter(a => a.suitability.includes(group));
}
