const Basename = 'YOUR VOCAB NAME';

const vocabularies = ( () => {
    const array = (Array.isArray(Vocabularies)) ? Vocabularies : Vocabularies.split(',');
    return array.filter(x => x).map(x => x.trim().replace(/\s/g, '-').toUpperCase());
})();

const transcribe = new TranscribeService({ apiVersion: '2017-10-26'});
const response = await transcribe.listVocabularies({
    MaxResults:100,
    NameContain: Basename
}).promise();

const params = {
    LanguageCode: 'en-US',
    Phrases: vocabularies,
    VocabularyName: Basename,
};

if( response.Vocabularies.findIndex(x => x.VocabularyName === Basename) < 0){
    await transcribe.createVocabulary(params).promise();
} else {
    await transcribe.updateVocabulary(params).promise();
}

