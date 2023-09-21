let mySprite: Sprite = null
animation.runMovementAnimation(
mySprite,
animation.animationPresets(animation.flyToCenter),
2000,
false
)
game.setGameOverEffect(true, effects.confetti)
