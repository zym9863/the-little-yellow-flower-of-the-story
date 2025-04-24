// Flower animation and rendering
export class Flower {
  private stage: number = 0;
  private element: HTMLElement | null = null;
  private container: HTMLElement | null = null;

  constructor(containerId: string) {
    this.container = document.getElementById(containerId);
    this.initialize();
  }

  private initialize(): void {
    if (!this.container) return;
    
    // Create flower element
    this.element = document.createElement('div');
    this.element.className = 'flower';
    this.container.appendChild(this.element);
    
    // Set initial stage
    this.updateFlower();
  }

  public setStage(stage: number): void {
    if (stage < 0 || stage > 5) return;
    
    this.stage = stage;
    this.updateFlower();
  }

  private updateFlower(): void {
    if (!this.element) return;
    
    // Remove all existing classes except 'flower'
    this.element.className = 'flower';
    
    // Add the appropriate stage class
    this.element.classList.add(`stage-${this.stage}`);
    
    // Add animation class
    this.element.classList.add('animate');
    
    // Remove animation class after animation completes
    setTimeout(() => {
      if (this.element) {
        this.element.classList.remove('animate');
      }
    }, 1000);
  }

  public getStage(): number {
    return this.stage;
  }
}
