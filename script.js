document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("text");
  const optionButtonsElement = document.getElementById("option-buttons");
  const typewriterText = document.getElementById("typewriter");

  let state = {};

  function showTextNode(textNodeId) {
    const textNode = textNodes.find((node) => node.id === textNodeId);
    textElement.innerText = textNode.text;

    while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNode.options.forEach((option) => {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("glow-button");
      button.addEventListener("click", function () {
        selectOption(option);
      });
      optionButtonsElement.appendChild(button);
    });
  }

  function selectOption(option) {
    if (option.setState) {
      state = Object.assign(state, option.setState);
    }
    showTextNode(option.nextText);
  }

  const textNodes = [
    {
      id: 1,
      text:
        "Youngling, This is your first trial. Look for an Invisec, home to many species of Aliens, called Republic City. Held there, away from the Humanoids that claim Coruscant, a young Taung child. Bring her back to her home planet Roon. This is a very dangerous mission as most Jedi have been extinct; Be mindful and aware. STAY LOW!",
      options: [
        {
          text: "Throw a party announcing you're going to be a Jedi",
          setState: { Jedi: true },
          nextText: 2,
        },
        {
          text: "Proceed with caution.",
          nextText: 3,
        },
        {
          text: "Ask citizens for information.",
          nextText: 3,
        },
      ],
    },
    {
      id: 2,
      text: "Stormtroopers were assessing the area and shot you in the head with their blasters. You are now Dead.",
      options: [
        {
          text: "Start Over",
          nextText: 1,
        },
      ],
    },
    {
      id: 3,
      text: "You notice some Storm Toopers checking the area.",
      options: [
        {
          text: "You find a manhole that leads into the sewer system and succesfully climb down into the sewers effectivly.",
          nextText: 4,
        },
        {
          text: "Calmly walk back in the direction you came from.",
          nextText: 5,
        },
      ],
    },
    {
      id: 4,
      text: "As you journey deeper into the dark and damp sewers, the stench becomes overwhelming. You crouch in the shadows, waiting for the patrol of stormtroopers to pass overhead. The darkness seems impenetrable, but your Jedi senses guide you forward.",
      options: [
        {
          text: "Trust the force and walk deeper into the sewers.",
          nextText: 6,
        },
        {
          text: "Ignore the force and climb back into the streets of Coruscant.",
          nextText: 5,
        },
        {
          text: "Cry & quit because you're scared.",
          nextText: 2,
        },
      ],
    },
    {
      id: 5,
      text: "Someone recognizes you and waves you towards their direction.",
      options: [
        {
          text: "Follow the sketchy citizen into their abode and stand there causously until they speak.",
          nextText: 7,
        },
        {
          text: "Walk past quickly, ignoring the sketchy citizen, getting away from the Stormtroopers in the process.",
          nextText: 6,
        },
      ],
    },
    {
      id: 6,
      text: "The Force leads you to Republic City. You find yourself in a bustling alien metropolis. Strange creatures from all corners of the galaxy go about their business.You begin to ask the aliens for information about the lost Taung child. One Alien citizen, however, confronts you, questioning your commitment as a Jedi. 'If you were a REAL Jedi,' the citizen challenges, 'you would break us out.'",
      options: [
        {
          text: "Agree, and break all Alien citizens out of Republic City.",
          nextText: 2,
        },
        {
          text: "Ignore the loud citizen, getting away from the crowd in the process. On to find the missing taung child.",
          nextText: 8,
        },
         ],
    },
    {
      id: 7,
      text: "To your surprise, the citizen reveals their true identity—a wise old Jedi in hiding. The old Jedi hands you a blaster and a map that outlines the intricacies of the sewer system, a secret network used by the alien refugees in Republic City.",
      options: [
        {
          text: "Thank the old Jedi for helping you and proceed to the sewers to save the old Taung girl.",
          nextText: 4,
        },
        {
          text: "Grab the blaster, shoot the old Jedi, and take his lightsabor. You then leave the dead Jedi's home and make your way to Republic City.",
          nextText: 6,
        },
        {
          text: "Ignore the old Jedi and sneak out the back door of the Jedi's hideout.",
          nextText: 2,
        },
      ],
    },
    {
      id: 8,
      text: "You navigate the dark, twisting tunnels beneath the city, avoiding the watchful eyes of Stormtroopers and blending in with the refugee crowds. Finally, you arrive at a tall, white building nestled in the northern part of the refugee camp. Peering through a small window, your heart leaps as you spot the lost Taung girl, along with other Alien children, locked in prison cells. Next to each cell door hangs a key, waiting to be used.The fate of the Taung child and the alien refugees now rests in your hands. Your Jedi training and the Force have brought you this far. What will you do next?",
      options: [
        {
          text: "Use the force to lift the key and unlock the prison cells relasing the children.",
          nextText: 9,
        },
        {
          text: "Walk into the front door and start whooping Strormtrooper ass.",
          nextText: 10,
        },
        {
          text: "Succumb to the Dark Side and Unleash Your Anger",
          nextText: 11,
        }
      ],
    },
    {
      id: 9,
      text: "With the Force as your ally, you focus your energy on lifting the key hanging beside the prison cells. A soft, blue glow surrounds the key, and it slowly rises into the air, guided by your concentration. The children inside the cells watch in amazement as the key effortlessly turns and unlocks each prison door.As the children step out of their cells, a sense of relief and gratitude fills the air. You've successfully rescued them, and their trust in you as a Jedi is unwavering.",
      options: [
        {
          text: "On with the mission",
          nextText: 13,
        },
      ],
    },
    {
      id: 10,
      text: "With your lightsaber ignited, you charge into the front door, determined to confront the Stormtroopers directly. Your blue blade crackles with energy as you engage in a fierce battle with the Imperial forces. Blaster bolts fly through the air, and the clashing of lightsabers echoes through the building's halls. Your Jedi skills prove formidable as you swiftly dispatch the Stormtroopers, one by one. Their numbers dwindle, and fear grips those who remain. You reach the imprisoned Taung child, cutting through the cell door's lock with your lightsaber. She emerges, terrified but safe, and you lead her to safety. The sight of the Jedi's bravery and combat prowess inspires hope among the alien refugees, and they rally behind you. However, your confrontation with the Stormtroopers doesn't go unnoticed. Imperial reinforcements are on their way, and the battle is far from over. With the Taung child and the refugees at your side, you must now make a daring escape and continue your mission to return her to Roon, all while evading the relentless pursuit of the Empire.",
      options: [
        {
          text: "",
          nextText: 9,
        },
        {
          text: "",
          nextText: 10,
        },
        {
          text: "",
          nextText: 11,
        }
      ],
    },
    {
      id: 11,
      text: "As you stand before the tall, white building, the anger and frustration that have built up inside you over the years begin to consume your thoughts. You can't help but resent the Empire and its Stormtroopers for causing so much suffering. Without hesitation, you abandon your Jedi principles and succumb to the dark side of the Force. You charge through the front door, not with the intention of rescuing the Taung child, but with a thirst for vengeance. Your lightsaber blazes with a crimson hue as you engage the Stormtroopers. The dark side enhances your power, and you ruthlessly cut down your foes, not stopping until they lie lifeless on the floor. Inside the prison cells, the Taung child and the other alien children watch in horror as you approach. Your anger is palpable, and they can sense the malevolent energy emanating from you. You force open the cell doors, terrifying the children further.",
      options: [
        {
          text: "Exit the building.",
          nextText: 12,
        },
      ],
    },
    {
      id: 12,
      text: "As you exit the building, leaving a trail of destruction behind you, the refugees who once looked to you for hope now regard you with fear and mistrust. They have witnessed the fall of a Jedi to the dark side, and they know that a new threat has emerged. Your actions have consequences, and the darkness that now surrounds you will lead you down a path of destruction and despair. The Empire may have been your enemy, but you've become something far more menacing. The galaxy trembles in the face of your newfound malevolence, and your journey takes a sinister turn as you embrace the dark side's power.",
      options: [
        {
          text: "Start Over",
          nextText: 1,
        },
      ],
    },
    {
      id: 13,
      text: "You motion for the children to follow you silently as you make your way through the narrow corridor, hugging the shadows. Your Jedi training allows you to move with grace and stealth. Suddenly you hear the distant voices of approaching Stormtroopers",
      options: [
        {
          text: "Your heart races as you guide the children into a concealed alcove just in time. The footsteps of the Imperial soldiers echo through the corridor as they pass by, oblivious to your presence",
          nextText: 14,
        },
        {
          text: "",
          nextText: ,
        },
      ],
    },
    {
      id: 14,
      text: "The footsteps of the Imperial soldiers echo through the corridor as they pass by, oblivious to your presence. Once the Stormtroopers are out of sight, you continue to lead the children through the complex, avoiding patrols and utilizing the Force to sense danger. You find a ventilation shaft that leads to the outside, a narrow but viable escape route. Gently, you help the little Taung girl and the other children climb into the ventilation shaft one by one. You follow them, moving quietly and swiftly. The cool night air hits your face as you emerge from the shaft onto a rooftop. From this vantage point, you can see the sprawling cityscape of Coruscant below. It's a dangerous place, but you have the Force and the determination to guide you.",
      options: [
        {
          text: "Stay above ground and move through the city, back to your (starfighter)",
          nextText: 15,
        },
        {
          text: "head into the streets of Coruscant and move through the crowd.",
          nextText: 17,
        }
        ],
    },
    {
      id: 15,
      text: "As you make your way across the rooftops, you sense a disturbance in the Force nearby. A lone Stormtrooper stands guard on a rooftop not far from your position. His helmeted head turns as if he's noticed something amiss. With a stern but silent nod to the little Taung girl, you step forward, activating your lightsaber with a sharp, blue hum. The Stormtrooper spots you and raises his blaster rifle, taking aim. The blaster bolt flies toward you, but you",
      options: [
        {
          text: "Effortlessly deflect it with your lightsaber, sending it harmlessly into the night sky.",
          nextText: ,
        },
        {
          text: "",
          nextText: ,
        }
        ],
    },
    {
      id: 16,
      text: "The blaster bolt flies toward you, but you effortlessly deflect it with your lightsaber, sending it harmlessly into the night sky. With a graceful leap, you close the gap between you and the Stormtrooper in an instant. The Stormtrooper fires a barrage of blaster shots, but your Jedi reflexes allow you to deflect each one, sending them back toward their source. The rooftop battle intensifies as you engage in a deadly dance of blaster bolts and lightsaber strikes.",
      options: [
        {
          text: "Disarm the Imperial Stormtrooper",
          nextText: 18,
        },
        {
          text: "",
          nextText: ,
        }
        ],
    },
    {
      id: 17,
      text: "Gently, you help the little Taung girl and the other children blend in with the bustling crowd on the city streets. Cloaked by the anonymity of the crowd, you move quietly and swiftly, your lightsaber concealed beneath your robes. The cool night air fills your lungs as you navigate the bustling cityscape of Coruscant below. It's a dangerous place, with Imperial presence everywhere, but you have the Force and the determination to guide you. As you make your way through the crowded streets, you sense a group of Stormtroopers closing in on your location. They're searching for any sign of the escaped children, and you know you must be cautious. Suddenly, the Stormtroopers spot you and the children in the crowd. Blasters are raised, and a tense standoff begins. With your lightsaber concealed, you have a difficult choice to make. Do you attempt a peaceful resolution and negotiate with the Stormtroopers, or do you ignite your lightsaber and prepare for a confrontation in the midst of the crowded streets? The fate of the little Taung girl and the other children rests in your hands, and the decisions you make now will shape their destiny.",
      options: [
        {
          text: "Negotiate with the Stormtroopers.",
          nextText: 21,
        },
        {
          text: "Ignite your lightsaber and prepare for a confrontation.",
          nextText: 22,
        }
        ],
    },
    {
      id: 18,
      text: "With a swift and precise move, you disarm the Stormtrooper, sending his blaster rifle flying. Cornered and defeated, he removes his helmet to reveal a terrified, young face beneath. The fear in his eyes is palpable. You take a deep breath, knowing that even an enemy can be shown mercy.",
      options: [
        {
          text: "Kill the Imperial Stormtrooper.",
          nextText: 20,
        },
        {
          text: "Show the Imperial Stormtrooper mercy.",
          nextText: 19,
        }
        ],
    },
    {
      id: 19,
      text: "You use the Force to calm his fear and influence his thoughts, implanting the idea that he should leave this life of servitude to the Empire behind. With a dazed expression, the Stormtrooper stumbles backward and then turns to flee from the rooftop, leaving his helmet behind. You watch him disappear into the night, his path forever changed. Turning back to the little Taung girl and the other children, you see a mixture of awe and gratitude in their eyes. The rooftop battle has come to an end, but the danger still lurks in the shadows of Coruscant.",
      options: [
        {
          text: "",
          nextText: ,
        },
        {
          text: "",
          nextText: ,
        }
        ],
    },
    {
      id: 20,
      text: "",
      options: [
        {
          text: "",
          nextText: ,
        },
        {
          text: "",
          nextText: ,
        }
        ],
    },
    {
      id: 21,
      text: "",
      options: [
        {
          text: "",
          nextText: ,
        },
        {
          text: "",
          nextText: ,
        }
        ],
    },
    {
      id: 22,
      text: "With a quick and decisive motion, you ignite your lightsaber, its brilliant blue blade blazing to life. The distinctive hum of the weapon cuts through the noise of the crowd, drawing the attention of everyone nearby, including the group of Stormtroopers. The Imperial soldiers, taken aback by your sudden display of power, hesitate for a moment. The citizens of Coruscant, initially fearful, begin to murmur and whisper, their curiosity piqued. The leader of the Stormtroopers, recognizing the threat you pose, orders his squad to stand down and lower their blasters. A tense standoff ensues, as neither side wishes to escalate the situation further in the heart of the city. You hold your ground, lightsaber raised, ready to defend the little Taung girl and the other children at all costs. The Jedi's presence and the ignited lightsaber send a clear message that you won't back down.",
      options: [
        {
          text: "Stand Your Ground.",
          nextText: 23,
        },
      ]
    }
    },
    {
      id: 23,
      text: "",
      options: [
        {
          text: "",
          nextText: ,
        },
        {
          text: "",
          nextText: ,
        }
        ],
    },
    {
      id: 24,
      text: "",
      options: [
        {
          text: "",
          nextText: ,
        },
        {
          text: "",
          nextText: ,
        }
        ],
    },
    {
      id: 25,
      text: "",
      options: [
        {
          text: "",
          nextText: ,
        },
        {
          text: "",
          nextText: ,
        }
        ],
    },
    {
      id: 26,
      text: "",
      options: [
        {
          text: "",
          nextText: ,
        },
        {
          text: "",
          nextText: ,
        }
        ],
    },
    {
      id: 27,
      text: "",
      options: [
        {
          text: "Effortlessly deflect it with your lightsaber, sending it harmlessly into the night sky.",
          nextText: ,
        },
        {
          text: "",
          nextText: ,
        }
        ],
    },
    {
      id: 28,
      text: "",
      options: [
        {
          text: "Effortlessly deflect it with your lightsaber, sending it harmlessly into the night sky.",
          nextText: ,
        },
        {
          text: "",
          nextText: ,
        }
        ],
    },
    {
      id: 29,
      text: "",
      options: [
        {
          text: "Effortlessly deflect it with your lightsaber, sending it harmlessly into the night sky.",
          nextText: ,
        },
        {
          text: "",
          nextText: ,
        }
        ],
    },
    {
      id: 30,
      text: "",
      options: [
        {
          text: "Effortlessly deflect it with your lightsaber, sending it harmlessly into the night sky.",
          nextText: ,
        },
        {
          text: "",
          nextText: ,
        }
        ],
    },
  ];

  function startGame() {
    // Initialize the game by showing the first text node
    showTextNode(1);
  }

  startGame();
});