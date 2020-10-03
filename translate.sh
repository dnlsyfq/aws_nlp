# short text

aws translate translate-text \
--endpoint-url endpoint \
--region region \
--source-language-code 'en' \
--target-language-code 'my' \
--text 'Testing'

# long text via json

aws translate translate-text \
-- endpoint-url endpoint \
--region region \
--cli-input-json file://translate.json > translated.json
