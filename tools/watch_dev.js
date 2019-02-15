// TODO: temporary solution

const spawn = require('child_process').spawn;

process.chdir('./src/gateway');
console.log('Changing working directory to ' + process.cwd());

const gatewayBuild = spawn('ng', ['serve', '--configuration=local']);

gatewayBuild.stdout.on('data', function (data) {
  console.log(data.toString());
});

gatewayBuild.stderr.on('data', function (data) {
  console.error(data.toString());
});

gatewayBuild.on('exit', function (code) {
  console.log('child process exited with code ' + code.toString());
});

process.chdir('../../');
console.log('Changing working directory to ' + process.cwd());

const packagrWatch = spawn('npm', ['run', 'package:watch']);

packagrWatch.stdout.on('data', function (data) {
  console.log(data.toString());
});

packagrWatch.stderr.on('data', function (data) {
  console.error(data.toString());
});

packagrWatch.on('exit', function (code) {
  console.log('child process exited with code ' + code.toString());
});


const serverWatch = spawn('npm', ['run', 'server']);

serverWatch.stdout.on('data', function (data) {
  console.log(data.toString());
});

serverWatch.stderr.on('data', function (data) {
  console.error(data.toString());
});

serverWatch.on('exit', function (code) {
  console.log('child process exited with code ' + code.toString());
});
