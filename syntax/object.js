var members = ['test1', 'test2', 'test3'];

console.log(members[1]);

var i = 0;
while (i < members.length) {
    console.log('array loop', members[i]);
    i = i + 1;
}

var roles = {
    'programmer':'test1',
    'designer' : 'test2',
    'manager' : 'test3'
};

console.log(roles.designer);

for(var name in roles)
{
    console.log('object =>', name, 'value => ', roles[name]);
}