<template>
  <div>
    <!-- type: image -->
    <FortuneWheel
      style="width: 0px; max-width: 100%;"
      ref="wheelEl"
      type="image"
      :useWeight="true"
      :verify="canvasVerify"
      :prizeId="prizeId"
      :angleBase="-2"
      :prizes="prizesImage"
      @rotateStart="onImageRotateStart"
    >
    </FortuneWheel>


    <!-- type: canvas -->
    <FortuneWheel
      style="width: 500px; max-width: 100%;"
      :verify="canvasVerify"
      :canvas="canvasOptions"
      :prizes="prizesCanvas"
      @rotateStart="onCanvasRotateStart"
      @rotateEnd="onRotateEnd"
    />
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { ref, computed, onMounted } from 'vue'
import FortuneWheel from 'vue-fortune-wheel'
import 'vue-fortune-wheel/style.css'

const prizeId = ref(0)

const wheelEl = ref()
const canvasVerify = ref(false) // Whether the turntable in canvas mode is enabled for verification
const verifyDuration = 2
const canvasOptions = {
  btnWidth: 140,
  borderColor: '#584b43',
  borderWidth: 6,
  lineHeight: 30,
  fontSize: 30,
  textLength: 7,
}

const prizesCanvas = [
  {
    id: 1, //* The unique id of each prize, an integer greater than 0
    name: 'HP', // Prize name, display value when type is canvas (this parameter is not needed when type is image)
    value: 0, //* Prize value, return value after spinning
    bgColor: '#fc0203', // Background color (no need for this parameter when type is image)
    color: '#ffffff', // Font color (this parameter is not required when type is image)
    probability: 16.6 //* Probability, up to 4 decimal places (the sum of the probabilities of all prizes
  },
  {
    id: 2,
    name: 'Attack',
    value: 1,
    bgColor: '#f08132',
    color: '#ffffff',
    probability: 16.7
  },
  {
    id: 3,
    name: 'Defense',
    value: 2,
    bgColor: '#fad030',
    color: '#ffffff',
    probability: 16.7
  },
  {
    id: 4,
    name: 'Sp. Atk',
    value: 3,
    bgColor: '#6d8df4',
    color: '#ffffff',
    probability: 16.7
  },
  {
    id: 5,
    name: 'Sp. Def',
    value: 4,
    bgColor: '#7bca53',
    color: '#ffffff',
    probability: 16.7
  },
  {
    id: 6,
    name: 'Speed',
    value: 5,
    bgColor: '#fa598b',
    color: '#ffffff',
    probability: 16.6
  },
]

const prizesImage = [
  {
    id: 1, //* The unique id of each prize, an integer greater than 0
    value: 'HP\'s value', //* Prize value, return value after spinning
    weight: 1 // Weight, if useWeight is true, the probability is calculated by weight (weight must be an integer), so probability is invalid
  },
  {
    id: 2,
    value: 'Attack\'s value',
    weight: 0
  },
  {
    id: 3,
    value: 'Defense\'s value',
    weight: 0
  },
  {
    id: 4, 
    value: 'Sp. Atk\'s value',
    weight: 0 
  },
  {
    id: 5,
    value: 'Sp. Def\'s value',
    weight: 0
  },
  {
    id: 6,
    value: 'Speed\'s value',
    weight: 0
  }
]

// const prizeRes = computed(() => {
//   return prizesCanvas.find(item => item.id === prizeId.value) || prizesCanvas[0]
// })


onMounted(() => {
  wheelEl.value.startRotate() // Can start rotation
})

// Simulate the request back-end interface
function testRequest (verified: any, duration: any) { // verified: whether to pass the verification, duration: delay time
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(verified)
    }, duration)
  })
}

function onCanvasRotateStart (rotate: () => void) {
  if (canvasVerify.value) {
    const verified = true // true: the test passed the verification, false: the test failed the verification
    testRequest(verified, verifyDuration * 1000).then((verifiedRes) => {
      if (verifiedRes) {
        console.log('Verification passed, start to rotate')
        rotate() // Call the callback, start spinning
        canvasVerify.value = false // Turn off verification mode
      } else {
        alert('Failed verification')
      }
    })
    return
  }
  console.log('onCanvasRotateStart')
}

function onImageRotateStart () {
  console.log('onImageRotateStart')
}

function onRotateEnd (prize: any) {
  router.push({path: 'game', query: {stat: prize.value}})
}

// function onChangePrize (id) {
//   prizeId.value = id
// }
</script>