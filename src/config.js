const config = {
  STRIPE_KEY: "pk_test_51HWmHZEf3tpcxowtCnEXxP15W3do0P0WVntonFatTzk8PfkL5EeTbm7whU2HB1PunnhOhD82R6hwDugDcSEXv3O600U679NfwH",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-api-prod-serverlessdeploymentbucket-cckutgl4p0ja",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://zm7zyxq398.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_9EkOHqZKN",
    APP_CLIENT_ID: "7u4k8crmejm56iib2dvunc7pv2",
    IDENTITY_POOL_ID: "us-east-1:79a15fcc-3d40-4354-b9f6-22a12eb1dc21",
  },
};

export default config;
