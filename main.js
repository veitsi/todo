tree={
    work:
    {
        coverLetters: {
            question:"How to write?",
            "possible answer":"провокационный заголовок и текст",
            sample:"Dear Director, I would like to submit the enclosed resume" +
                " for your opening for developer. After carefully reading about" +
                " the position on your website, I'm confident I am fully qualified" +
                " for the position and would appreciate a job interview. In the job posting," +
                " you mention that Ciklum is expanding its New Jersey operations and that " +
                "the sales analyst would be involved in that expansion. I would like to " +
                "understand more about that involvement, because I have relatives in New Jersey" +
                " and might be interested in eventually moving to that state. I am available " +
                "for interviews any time before the end of this month. " +
                "Please call or email me " +
                "at the above contact information. Sincerely yours, Vitaliy"
        },
        vacancies:
        {
            "qa manual": {
                "QA Engineer (mobile)":
                 "jobs.dou.ua/companies/innomos-international/vacancies/14473/",
                "QA Engineer":
                  "http://jobs.dou.ua/companies/omnigon/vacancies/11058/"
            }
        },

        jobsites:["dou.ua", "work.ua", "it.rabota.ua"],
        speciality:["manual tester", "auto tester", "java developer", "JavaScript developer"],
        companies:[
        "EPAM","Luxoft", "Ciklum", {title:"GlobalLogic",
                                    tip:"берут тестировщиков для тестирования драйверов." +
                                        "инфа от преподавателя и сотрудника"}
    ]},
    itandeducation:["Live courses","offline resources"],
    personal: {
        profNetwork:[
            "dou.ua",
            {vk: "people with same interests"},
            {tosterDotru:"asking questions"},
            "skypeCommunications",
            "liveEvents",
            "Coworkings etc."
        ]
    }
};
document.write(tree.work.coverLetters.sample);