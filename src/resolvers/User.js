const  User = {
    posts(parent, args, { db }, info){
        if(args.limit){
            return db.posts.filter(post => post.author == parent.id).splice(0,args.limit)
        }
        return db.posts.filter(post => post.author == parent.id)
    },
}


export { User as default }