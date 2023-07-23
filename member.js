function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['JS', 'CSS', 'HTML'],
        salary: 2000,
        bonus: 100,
        getSalary: function () {
            return this.salary + this.bonus;
        }
    };
    console.log(member);
    console.log(member.name);
    console.log(member.age);
    console.log(member.skills);
    console.log(member.skills[0]);
    console.log(member.skills[1]);
    console.log(member.skills[2]);
    console.log(member.getSalary());
}