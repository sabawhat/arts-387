import pixieNeutral from './assets/sprites/pixie_neutral.PNG'
import pixieHappy from './assets/sprites/pixie_happy.PNG'
import pixieSad from './assets/sprites/pixie_sad.PNG'
import pixieAngry from './assets/sprites/pixie_angry.PNG'

import andyNeutral from './assets/sprites/andy_neutral.PNG'
import andyHappy from './assets/sprites/andy_happy.PNG'
import andySad from './assets/sprites/andy_sad.PNG'
import andyAngry from './assets/sprites/andy_angry.PNG'

import goudaNeutral from './assets/sprites/gouda_neutral.PNG'
import goudaHappy from './assets/sprites/gouda_happy.PNG'
import goudaSad from './assets/sprites/gouda_sad.PNG'
import goudaAngry from './assets/sprites/gouda_angry.PNG'

import ddNeutral from './assets/sprites/dd_neutral.png'
import ddHappy from './assets/sprites/dd_happy.PNG'
import ddSad from './assets/sprites/dd_sad.PNG'
import ddAngry from './assets/sprites/dd_angry.PNG'

import andyBG from './assets/backgrounds/andy.png'
import goudaBG1 from './assets/backgrounds/gouda_1.png'


function loadAsssets() {
    const pixie_img = [pixieNeutral, pixieHappy, pixieSad, pixieAngry]
    const andy_img = [andyNeutral, andyHappy, andySad, andyAngry, andyBG]
    const gouda_img = [goudaNeutral, goudaHappy, goudaSad, goudaAngry, goudaBG1]
    const dd_img = [ddNeutral, ddHappy, ddSad, ddAngry]

    return [andy_img, pixie_img, gouda_img, dd_img]
}

export default loadAsssets;