pipeline {
    agent any

    stages {
        stage('clone') {
            steps {
                checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/EunjaeJo/cabinet.git']])
            }
        }

        stage('Build and Run Docker Image') {
            steps {
                script {
                    // Docker 이미지 빌드 - myPage: cabinet1
                    sh 'docker build -t jaeae/cabinet_myPage:latest -f Dockerfile .'

                    // Docker 컨테이너 실행 (백그라운드에서 실행)
                    sh 'docker run -d -p 3000:3000 --name cabinet_myPage jaeae/cabinet_myPage:latest'
                }
            }
        }

        stage('Push image to Docker Hub') {
            steps {
                script {
                        docker.withRegistry('https://index.docker.io/v1/', 'jaeae') {
                            sh "docker push jaeae/cabinet_myPage"
                        }
                    
                }
            }
        }
    }
}
