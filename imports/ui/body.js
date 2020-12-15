import Session from 'meteor/session';
import collFactory from '/lib/collfactory';
import './body.html'

Template.body.events({
    'submit form': (e,t)=>{
        e.preventDefault()
        //console.log('clicked')
        var val = e.target.collName.value;
        console.log(val)
        try {
            var books = collFactory.create(val)
            books.insert({"book": "Loneliness", "author": "Robert Weiss"})
            var look = books.find({}).fetch()
            console.log(look)
        }
        catch(e){
            console.log(e)
        }
    }   
})
