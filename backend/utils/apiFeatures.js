class APIFeatures{
    constructor(query,querystr){
        this.query = query;
        this.queryStr=querystr
    }

    search(){
        let keyword = this.queryStr.keyword ? {
            name: { 
                $regex: this.queryStr.keyword ,
                $options:'i'//case sensitive
            }
        }:{};

        this.query.find({...keyword})
        return this
    }

    filter() {
        const queryStrcopy = {...this.queryStr}

        const removeFields = ['keyword','limit','page']
        removeFields.forEach(field => delete queryStrcopy[field])
      
        let querystr = JSON.stringify(queryStrcopy)
         querystr = querystr.replace(/\b(gt|gte|lt|lte)/g,match =>`$${match}`)
       
        this.query.find(JSON.parse(querystr))
        return this

    }

    paginate(resPerPage){
        const currentpage =  Number(this.queryStr.page) || 1
          const skip = resPerPage*(currentpage-1)
          this.query.limit(resPerPage).skip(skip)
          return this; 
    }
}

module.exports= APIFeatures