const chalk = require('chalk'),
    path = require('path'),
    fs = require('fs');

// Set path
let setPath = (filePath) => {
    return path.join(__dirname, filePath)
}

// Get component name from cli
let componentName = process.argv[2] || 'newComponent'

// Check component name exists
let comExist = fs.existsSync(setPath(`../app/components/${componentName}`))
if (comExist) {
    console.log(chalk.red('Component Name Already Exists !!'))
    process.exit()
}

// Create component folder
fs.mkdirSync(setPath(`../app/components/${componentName}`))
console.log(chalk.green(`Created - app/components/${componentName}`))


// Read & Replace Dynamic Params
let controllerData = fs.readFileSync(setPath('./componentFiles/controller.js'), 'utf8')
controllerData = controllerData.replace(/COMPONENT_NAME/g, componentName)
fs.writeFileSync(setPath(`../app/components/${componentName}/${componentName}.controller.js`), controllerData)
console.log(chalk.green(`Created - app/components/${componentName}/${componentName}.controller.js`))

let indexData = fs.readFileSync(setPath('./componentFiles/index.js'), 'utf8')
indexData = indexData.replace(/COMPONENT_NAME/g, componentName)
fs.writeFileSync(setPath(`../app/components/${componentName}/${componentName}.index.js`), indexData)
console.log(chalk.green(`Created - app/components/${componentName}/${componentName}.index.js`))

let modelData = fs.readFileSync(setPath('./componentFiles/model.js'), 'utf8')
modelData = modelData.replace(/COMPONENT_NAME/g, componentName)
fs.writeFileSync(setPath(`../app/components/${componentName}/${componentName}.model.js`), modelData)
console.log(chalk.green(`Created - app/components/${componentName}/${componentName}.model.js`))

let routeData = fs.readFileSync(setPath('./componentFiles/route.js'), 'utf8')
routeData = routeData.replace(/COMPONENT_NAME/g, componentName)
fs.writeFileSync(setPath(`../app/components/${componentName}/${componentName}.route.js`), routeData)
console.log(chalk.green(`Created - app/components/${componentName}/${componentName}.route.js`))

let validatorsData = fs.readFileSync(setPath('./componentFiles/validators.js'), 'utf8')
validatorsData = validatorsData.replace(/COMPONENT_NAME/g, componentName)
fs.writeFileSync(setPath(`../app/components/${componentName}/${componentName}.validators.js`), validatorsData)
console.log(chalk.green(`Created - app/components/${componentName}/${componentName}.validators.js`))


// Final Log
console.log(chalk.green('New Component Created !!'))