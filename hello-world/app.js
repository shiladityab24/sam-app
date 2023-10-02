const AWS = require('aws-sdk');
exports.lambdaHandler = async (event, context) => {
    AWS.config.update({
        region: 'ap-south-1'
    })

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const dynamoDBTableName = 'sam-seventh-dynamodb-DynamoDBTable-1JORD1I5AAHDM';


    const params = {
        TableName: dynamoDBTableName,
        Item: {
            id: Date.now().toString(),
            info: {
                name: 'Shiladitya 10 DynamoDB',
                email: 'shiladitya.bose.10@gmail.com',
                age: '10',
                address: 'Kolkata'
            }
        }        
    }

    try{
        await dynamodb.put(params).promise();
        console.log('Data inserted successfully');
    } catch(error){
        console.err('Error while inserting data ', error.message);
    }

    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
