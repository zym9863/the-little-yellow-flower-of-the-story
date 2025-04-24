// Story content with multiple chapters/stages
export interface StoryPart {
  id: number;
  title: string;
  content: string;
  flowerStage: number; // 0-5 representing growth stages
}

export const storyParts: StoryPart[] = [
  {
    id: 0,
    title: "The Beginning",
    content: "Once upon a time, in a small garden, there was a tiny seed waiting to sprout. The soil was warm, and the rain had just fallen, creating the perfect conditions for new life.",
    flowerStage: 0
  },
  {
    id: 1,
    title: "First Sprout",
    content: "After days of patience, a small green sprout emerged from the soil. It was delicate but determined, reaching towards the sunlight with all its might.",
    flowerStage: 1
  },
  {
    id: 2,
    title: "Growing Stronger",
    content: "The sprout grew taller each day, developing a slender stem and tiny leaves. It faced wind and rain, but remained resilient, growing stronger with each challenge.",
    flowerStage: 2
  },
  {
    id: 3,
    title: "The Bud Appears",
    content: "After weeks of growth, a small bud formed at the top of the stem. It was tightly closed, holding a beautiful secret inside, waiting for the right moment to reveal itself.",
    flowerStage: 3
  },
  {
    id: 4,
    title: "Blooming",
    content: "When the time was right, the bud slowly began to open. Delicate yellow petals unfurled, revealing a bright and cheerful flower that seemed to smile at the sun.",
    flowerStage: 4
  },
  {
    id: 5,
    title: "Full Bloom",
    content: "The little yellow flower stood tall and proud, fully bloomed in all its glory. Bees and butterflies visited, drawn to its vibrant color and sweet nectar. The garden was more beautiful because of this one small flower that had overcome so much to bloom.",
    flowerStage: 5
  }
];

// Current story state
export class StoryState {
  private currentPartIndex: number = 0;

  constructor() {}

  getCurrentPart(): StoryPart {
    return storyParts[this.currentPartIndex];
  }

  nextPart(): StoryPart | null {
    if (this.hasNextPart()) {
      this.currentPartIndex++;
      return this.getCurrentPart();
    }
    return null;
  }

  previousPart(): StoryPart | null {
    if (this.hasPreviousPart()) {
      this.currentPartIndex--;
      return this.getCurrentPart();
    }
    return null;
  }

  hasNextPart(): boolean {
    return this.currentPartIndex < storyParts.length - 1;
  }

  hasPreviousPart(): boolean {
    return this.currentPartIndex > 0;
  }

  reset(): void {
    this.currentPartIndex = 0;
  }
}
