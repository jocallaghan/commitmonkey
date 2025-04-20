const {OPTIONS} = require("../commitmonkey-options");
const { OpenAI } = require("openai");


async function getOpenAiRoast(originalMessage) {

    const client = new OpenAI({
        apiKey: OPTIONS.openApiKey
    });

    try {
        const response = await client.responses.create({
            model: "gpt-4.1",
            instructions: `You are a code reviewer. Rewrite this commit message as 
            a roast for a developer (with a ${OPTIONS.profile} personality). 
            Only speak in first person as the developer. Keep anything lat looks like ticket numbers or release versions.`,
            input: originalMessage,
        });
        return response.output_text;
    } catch (err) {
        console.error("commitmonkey: OpenAI API error:", err.message);
        return null;
    }

}

module.exports = {
    getOpenAiRoast
};
