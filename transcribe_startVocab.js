const Basename = 'Audio File';

const params = {
    LanguageCode: 'en-US',
    MediaFormat: 'mp4',
    Media: {MediaFileUri: mediaFileUri},
    // generate unique transcribe name
    TranscriptionJobName: `${Basename}-${new Date().toISOString().replace(/[-:.]/g,'')}`,
};

if(Vocabularies){
    params.Settings = {VocabularyName: Basename};
}

const transcribe = new TranscribeService({apiVersion: '2017-10-26'});
const response = await transcribe.startTranscriptionJob(params).promise();