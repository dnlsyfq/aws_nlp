# iot mqtt message broker

# create thing
aws iot create-thing --thing-name danrasp

# create iot policy
aws iot create-policy \
--policy-name daniotpolicy \
--policy-document \
'{
    "Version":"2012-10-17",
    "Statement":[{
        "Effect":"Allow",
        "Action":"iot:*",
        "Resource":"*"
    }]
}'

# define message topic

anyTopicname/status

# attach a policy to cognito user

aws iot attach-policy \
--policy-name anthingPolicy \
--target "us-east-1:0000-0000..."