import './style.css'
import { StoryState } from './story'
import { Flower } from './flower'

// Initialize the app
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <h1>The Little Yellow Flower of the Story</h1>

    <div class="story-container">
      <div class="flower-container" id="flower-container"></div>

      <div class="story-content">
        <h2 id="story-title"></h2>
        <p id="story-text"></p>
      </div>

      <div class="navigation">
        <button id="prev-btn" class="nav-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
          Previous
        </button>
        <button id="next-btn" class="nav-btn">
          Next
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
`

// Initialize story and flower
const storyState = new StoryState();
const flower = new Flower('flower-container');

// DOM elements
const storyTitleElement = document.getElementById('story-title') as HTMLHeadingElement;
const storyTextElement = document.getElementById('story-text') as HTMLParagraphElement;
const prevButton = document.getElementById('prev-btn') as HTMLButtonElement;
const nextButton = document.getElementById('next-btn') as HTMLButtonElement;

// Update UI based on current story part
function updateUI(): void {
  const currentPart = storyState.getCurrentPart();

  // Update story content
  storyTitleElement.textContent = currentPart.title;
  storyTextElement.textContent = currentPart.content;

  // Update flower stage
  flower.setStage(currentPart.flowerStage);

  // Update navigation buttons
  prevButton.disabled = !storyState.hasPreviousPart();
  nextButton.disabled = !storyState.hasNextPart();
}

// Event listeners
prevButton.addEventListener('click', () => {
  storyState.previousPart();
  updateUI();
});

nextButton.addEventListener('click', () => {
  storyState.nextPart();
  updateUI();
});

// Initialize UI
updateUI();
