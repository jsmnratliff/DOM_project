const textElement = document.getElementById("text")
const optionButtonsElement = document.getElementById("option-buttons")

document.addEventListener("DOMContentLoaded", function () {
    const typewriterText = document.getElementById("typewriter");
    const darkSideButton = document.querySelectorAll(".glow-button")[0];
    const neutralButton = document.querySelectorAll(".glow-button")[1];
    const lightSideButton = document.querySelectorAll(".glow-button")[2];
  
    let state = {}
    
    function startGame () {
        state = {}
        showTextNode=(1);
    }
    function showTextNode(textNodeIndex) {
        const textNode = textNodes.find(textNode => textNodeId === textNodeIndex)
        textElement.innerText = textNode.text;

        while (optionButtonElement.firstChild) {
            optionButtonElement.removeChild(optionButtonElement.firstChild)
        }
    }
        textNode.options.forEach((option) => {
            const button = document.createElement("button");
            button.innerText = option.text;
            button.classList.add("glow-button");
            button.addEventListener("click", function () {
              selectOption(option);
            });
            optionButtonElement.appendChild(button);
          });
        }

function selectOption(option) {
    if (option.setState) {
        state = Object.assign(state, option.setState);
    }
    showTextNode(option.nextText);
}

    darkSideButton.addEventListener("click", function () {
        selectOption(textNodes[0].options[0]);
      });
    
      neutralButton.addEventListener("click", function () {
        selectOption(textNodes[0].options[1]);
      });
    
      lightSideButton.addEventListener("click", function () {
        selectOption(textNodes[0].options[2]);
      });
    
      const optionButtonElement = document.getElementById("option-buttons");
    
      const textNodes = [

        {
          id: 1,
          text: "Youngling, This is your first trial. Look for an Invisec, home to many species of Aliens, called Republic City. Held there, away from the Humanoids that claim Coruscant. In there, a young Taung child. Bring her back to her home planet Roon. This is a very dangerous mission as most Jedi have been extinct; Be mindful and aware. STAY LOW!",
          options: [
            {
              text: "Throw a party announcing you're a Jedi",
              setState: { Jedi: true },
              nextText: 2,
            },
            {
              text: "Proceed with caution.",
              nextText: 2,
            },
          ],
        },
        {
          id: 2

        },
      ];
    
      startGame();
          });