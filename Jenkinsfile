pipeline {
  agent any

//   environment {
//     DOCKER_IMAGE = '10005/nestjs-test'
//     DOCKER_TAG = 'latest'
//   }

  tools {
    nodejs 'nodejs' // Adjust this to match your Jenkins Node.js tool name
  }

  stages {

    stage('Install Pnpm') {
      steps {
        echo 'Installing dependencies...'
        sh 'npm install -g pnpm'
      }
    }


    stage('Install Dependencies') {
      steps {
        echo 'Installing dependencies...'
        sh 'pnpm install'
      }
    }

    stage('Build') {
      steps {
        echo 'Building project...'
        sh 'pnpm run build'
      }
    }


    stage('Format Check') {
      steps {
        echo 'Checking formatting...'
        sh 'pnpm run format:check'
      }
    }

    stage('Lint') {
      steps {
        echo 'Linting...'
        sh 'pnpm run lint'
      }
    }

    stage('Test') {
      steps {
        echo 'Running tests...'
        sh 'pnpm run test'
      }
    }


    // stage('Docker Build & Push') {
    //   steps {
    //     script {
    //       docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-creds') {
    //         def image = docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
    //         image.push()
    //       }
    //     }
    //   }
    // }

    // stage('Notify Portainer Using Webhook') {
    //   steps {
    //     sh 'curl --fail -X POST https://portainer.afaqjaved.com/api/stacks/webhooks/2e935555-d61b-4855-afcb-44c05a193417'
    //   }
    // }
  }

  post {
    failure {
      echo 'Pipeline failed!'
    }
    success {
      echo 'Pipeline completed successfully!'
    }
  }
}