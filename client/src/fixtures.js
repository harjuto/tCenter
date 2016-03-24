export default {

    calendar: {
      enabled: true,
      url: 'https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=2&amp;hl=en&amp;bgcolor=%23FFFFFF&amp;src=harjuto%40gmail.com&amp;color=%231B887A&amp;ctz=Europe%2FHelsinki" width="800" height="600" frameBorder="0" scrolling="no"'
    },
    timetable: {
      enabled: true,
      loaded: false,
      departures: undefined,
      url: 'http://api.reittiopas.fi/hsl/prod/?user=infoscreen&pass=Sb1vtu&request=stop&code=4285&dep_limit=5',
      stops: [
        '000000'
      ]

    },
    tasks: {
      enabled: true,
      items: [
        {
          description: 'Testi1',
          checked: false
        },
        {
          description: 'Testi2',
          checked: true
        },
        {
          description: 'Testi3',
          checked: true
        },
        {
          description: 'Testi4',
          checked: true
        },
        {
          description: 'Testi5',
          checked: false
        }
      ]

    }


}