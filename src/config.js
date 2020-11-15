const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-api-prod-serverlessdeploymentbucket-cckutgl4p0ja",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://zm7zyxq398.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "user-east-1",
    USER_POOL_ID: "us-east-1_9EkOHqZKN",
    APP_CLIENT_ID: "7u4k8crmejm56iib2dvunc7pv2",
    IDENTITY_POOL_ID: "us-east-1:79a15fcc-3d40-4354-b9f6-22a12eb1dc21",
  },
};

export default config;
