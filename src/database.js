const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://octaviodevtech:octavio112020@clusteroctavio.n8a1lsl.mongodb.net/ticontrol?retryWrites=true&w=majority')

.then(db => console.log('----mongodb atlas connected----'))
.catch(err => console.log(err));