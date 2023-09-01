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
      text: "It's dark, wet, and it stinks. As you're waiting for the stormtroopers to walk past above you, you notice how dark it is. As you look deeper into the dark sewers, you start to see a light form in the shape of a familar face. It's too blurry to see who it is.",
      options: [
        {
          text: "Trust the force and walk deeper into the sewers, towards the figure.",
          nextText: 6,
        },
        {
          text: "Ignore the light and climb back into the streets of....",
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
      text: "The force leads you into Republic City. You're walking around. asking the Aliens where the Taung child could be. One Alien citizen gives you a hard time by saying that they should all be free to live wherever they please and that if you were a REAL Jedi, you would break them out.",
      options: [
        {
          text: "Agree with the Alien and break all Alien citizens out of Republic City.",
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
      text: "The Citizen is an old Jedi in hiding. He gives you a blaster and a map that shows you how to use the sewer system to get to the Alien refugee camp, Republic City.",
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
      text: "You've avoided being spotted by Stormtroopers and large crowds of citizens and made your way to a tall, white buidling on the north side of the camp. You peer inside a window and find the lost Taung girl along with other Alien children inside prison cells. Next to each prison door was a hanging key.",
      options: [
        {
          text: "Use the force to lift the key and unlock the prison cells relasing the children.",
          nextText: ,
        },
        {
          text: "Walk into the front door and start whooping Strormtrooper ass.",
          nextText: ,
        },
      ],
    },
  ];

  function startGame() {
    // Initialize the game by showing the first text node
    showTextNode(1);
  }

  startGame();
});