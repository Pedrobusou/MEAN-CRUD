const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mean-crud';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(URI)
    .then(db => console.log('DB conected'))
    .catch(e => console.error(error));

module.exports = mongoose;