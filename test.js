let users = [];

function generateFakeUser(i = 10)
{
    console.log('%cSTARTING TESTS', 'color: red');
    while(--i)
    {
        let user = new User(
            faker.name.findName(),
            faker.image.avatar(80, 80),
            faker.name.gender(),
            faker.address.countryCode(),
            faker.date.between('1970', '2000'),
            faker.random.boolean()
        )

        users.push(user);
        user.render('lg', document.querySelector('.usersList'));
    }
    console.log(users);
    console.log('%cTESTS FINISHED', 'color: red');

}