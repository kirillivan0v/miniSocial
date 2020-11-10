let users = [];
let genders = ['Male', 'Female', 'Trans'];

function generateFakeUser(i = 30)
{
    console.log('%cSTARTING TESTS', 'color: red');
    while(--i)
    {
        let user = new User(
            faker.name.findName(),
            faker.image.avatar(80, 80),
            faker.random.arrayElement(genders),
            faker.address.countryCode(),
            faker.date.between('1970', '2000'),
            faker.random.boolean()
        )

        users.push(user);
        user.render('md', document.querySelector('.usersList'));
    }
    console.log(users);
    console.log('%cTESTS FINISHED', 'color: red');

}