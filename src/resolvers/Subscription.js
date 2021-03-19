const Subscription = {
    count: {
        subscribe(parent, args, { pubsub }, info) {
            let count = 0

            pubsub.publish('count', {
                count
            })
            setTimeout(() => {
                count++
                pubsub.publish('count', {
                    count
                })
            }, 3000)

            return pubsub.asyncIterator('count')
        }
    },
    comment: {
        subscribe(parent, {postId} , { db, pubsub }, info){
            
            if(!db.posts.find(post => post.id == postId)){
                throw new Error('Sorry post not fount')
            }
            
            return pubsub.asyncIterator(`comment_${postId}`)
        }
    },
    post: {
        subscribe(parent, args, { pubsub }, info){

            return pubsub.asyncIterator(`post`)
        }
    }
}

export { Subscription as default }