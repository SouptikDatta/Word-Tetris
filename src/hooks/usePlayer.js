import { useState, useCallback } from 'react';

import { randomTetromino } from '../tetrominos';
import { STAGE_WIDTH } from '../gameHelpers';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false,
  });

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y)},   //after every key press direction player will update its previous 
      collided,                                            // its previous pos by adding new pospos by adding new pos                                         
    }))
  }

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },    //After reseting the player should start from middle of x-axis and starting of y-axis
      tetromino: randomTetromino().shape,       //After reseting the player can get any random shape
      collided: false,
    })
  }, [])

  return [player, updatePlayerPos, resetPlayer];
};