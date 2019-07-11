const log = console.log
@setEnglishName('jacky')

class Person {
  constructor(name, gender) {
    this.init(name, gender)
  }

  init(name, gender) {
    this.name = name
    this.gender = gender
  }

  @withChinese('张三')
  greet(who) {
    return `hello ${who}`
  }
}

function setEnglishName(englishName) {
  return target => {
    target.prototype.englishName = englishName
  }
}

function withChinese(who) {
  return (target, name, descriptor) => {
    descriptor.value = () => {
      return `你好${who}`
    }
  }

}

export default Person
