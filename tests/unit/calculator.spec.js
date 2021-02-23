import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })
})

describe('App.vue', () => {
  it('add 1 to 4 and get 5', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('1');
    expect(wrapper.vm.runningTotal).to.equal(5)
  })
})

describe('App.vue', () => {
  it('subtract 4 from 7 and get 3', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })
}) 

describe('App.vue', () => {
  it('multiply 3 by 5 and get 15', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15)
  })
})

describe('App.vue', () => {
  it('concatenate multiple number button clicks', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 0
    wrapper.vm.numberClick('1');
    wrapper.vm.numberClick('2');
    wrapper.vm.numberClick('3');
    wrapper.vm.numberClick('4');
    wrapper.vm.numberClick('5');
    wrapper.vm.numberClick('6');
    wrapper.vm.numberClick('7');
    wrapper.vm.numberClick('8');
    wrapper.vm.numberClick('9');
    expect(wrapper.vm.runningTotal).to.equal(123456789)
  })
})

describe('App.vue', () => {
  it('chain multiple operations together', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 0
    wrapper.vm.numberClick('1');
    wrapper.vm.operatorClick('+');
    wrapper.vm.numberClick('1');
    wrapper.vm.operatorClick('-');
    wrapper.vm.numberClick('1');
    wrapper.vm.operatorClick('*');
    wrapper.vm.numberClick('8');
    wrapper.vm.operatorClick('/');
    wrapper.vm.numberClick('8');
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(1)
  })
})