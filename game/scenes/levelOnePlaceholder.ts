import Phaser from 'phaser';

class LevelOnePlaceholderScene extends Phaser.Scene {
  constructor() {
    super('LevelOnePlaceholderScene');
  }

  create() {
    this.add.rectangle(480, 270, 960, 540, 0xd7f3ff);
    this.add.text(480, 220, 'Level 1 Placeholder', {
      fontFamily: 'Arial',
      fontSize: '52px',
      color: '#a21caf'
    }).setOrigin(0.5);

    this.add.text(480, 300, 'Phaser scene loaded!\nReal puzzle gameplay comes in Phase 3.', {
      fontFamily: 'Arial',
      fontSize: '28px',
      color: '#86198f',
      align: 'center'
    }).setOrigin(0.5);
  }
}

export const levelOnePlaceholderScene = LevelOnePlaceholderScene;
