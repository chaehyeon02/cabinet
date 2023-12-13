node {
    def app
    stage('Clone repository') {
        git 'https://github.com/EunjaeJo/cabinet.git'
        }
    stage('Build image') {
        app = docker.build("jaeae/cabinet")
    }
    stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com', 'jaeae') {
          app.push("${env.BUILD_NUMBER}")
          app.push("latest")
        }
    }
}
