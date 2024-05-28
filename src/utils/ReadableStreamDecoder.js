// decodes stream of data chunks.

async function ReadableStreamDecoder(body) {
    try {
        const reader = body.pipeThrough(new TextDecoderStream("utf-8")).getReader();
        let json_temp = "";

        while (true) {
            const { value, done } = await reader.read();
            json_temp = json_temp + (value ? value : "");
            if (done) break;
        }

        const data = JSON.parse(json_temp);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export default ReadableStreamDecoder;