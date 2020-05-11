import { expect } from 'chai';
import { makeIndex as makeFlexSearchIndex, newTextSelector, NewSearchDocument, makeDocDescription, NewSearchIndex, newTagSelectorCondition, newTagsSelectors } from '../ts/domain/search';
import { PluginMessage } from '../ts/message/messages';

describe('testFlexsearchQueries', function() {
    

    it('simpleText', function() {
        const description = makeDocDescription()
        const flexIndex = makeFlexSearchIndex(description)
        flexIndex.add([
            NewSearchDocument("id1", "text", "type1"),
            NewSearchDocument("id2", "msg", "type1"),
        ])

        const selector = newTextSelector("text")

        const docs = NewSearchIndex(flexIndex, description).searchOneSelector(selector)
        expect(docs).length(1)

        expect(docs[0].id).eq("id1")
    });

    it('tagsValidDocDescription', function() {
        const description = makeDocDescription(["tag1", "tag2"])
        const flexIndex = makeFlexSearchIndex(description)
        const doc1 = NewSearchDocument("id1", "text", "type1")
        doc1.setTag("tag1")
        doc1.setTag("tag2")

        const doc2 = NewSearchDocument("id2", "msg", "type1")
        doc2.setTag("tag1")

        flexIndex.add([doc1, doc2])

        const selector = newTagsSelectors(["tag1", "tag2"])
        
        const docs = NewSearchIndex(flexIndex, description).searchMultipleSelectors(selector)
        expect(docs).length(1)

        expect(docs[0].id).eq("id1")
    })

    it('tagsInvalidDocDescription', function() {
        const description = makeDocDescription()
        const flexIndex = makeFlexSearchIndex(description)

        const index = NewSearchIndex(flexIndex, description)

        try {
            index.searchMultipleSelectors(newTagsSelectors(["tag"]))
        } catch (e) {
            if (e instanceof PluginMessage) {
                console.log(e)
            } else {
                throw e
            }
        }
    })

    it('tagsAndText', function() {
        const description = makeDocDescription(["tag"])
        const flexIndex = makeFlexSearchIndex(description)
        const doc1 = NewSearchDocument("id1", "text", "type1")
        doc1.setTag("tag")

        const doc2 = NewSearchDocument("id2", "msg", "type1")
        doc2.setTag("tag")

        flexIndex.add([doc1, doc2])

        const selector = newTextSelector("text")
        selector.where = newTagSelectorCondition(["tag"])
        
        const docs = NewSearchIndex(flexIndex, description).searchOneSelector(selector)
        expect(docs).length(1)

        expect(docs[0].id).eq("id1")
    })
});