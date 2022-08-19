import { faAt, faPhone, faSignal, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ResponsiveCalendar } from '@nivo/calendar'
import React from 'react'


const data = [
  {
    "value": 146,
    "day": "2018-03-04"
  },
  {
    "value": 279,
    "day": "2015-12-11"
  },
  {
    "value": 298,
    "day": "2018-01-08"
  },
  {
    "value": 336,
    "day": "2016-02-24"
  },
  {
    "value": 246,
    "day": "2018-06-24"
  },
  {
    "value": 125,
    "day": "2017-06-23"
  },
  {
    "value": 202,
    "day": "2016-07-24"
  },
  {
    "value": 299,
    "day": "2017-01-16"
  },
  {
    "value": 386,
    "day": "2017-02-13"
  },
  {
    "value": 54,
    "day": "2017-05-23"
  },
  {
    "value": 39,
    "day": "2016-09-02"
  },
  {
    "value": 235,
    "day": "2017-11-03"
  },
  {
    "value": 59,
    "day": "2016-09-13"
  },
  {
    "value": 262,
    "day": "2017-05-24"
  },
  {
    "value": 293,
    "day": "2017-01-21"
  },
  {
    "value": 318,
    "day": "2016-03-14"
  },
  {
    "value": 69,
    "day": "2018-02-18"
  },
  {
    "value": 100,
    "day": "2015-09-15"
  },
  {
    "value": 293,
    "day": "2018-07-26"
  },
  {
    "value": 316,
    "day": "2016-07-16"
  },
  {
    "value": 383,
    "day": "2016-05-23"
  },
  {
    "value": 185,
    "day": "2018-07-25"
  },
  {
    "value": 339,
    "day": "2018-01-23"
  },
  {
    "value": 227,
    "day": "2017-10-05"
  },
  {
    "value": 147,
    "day": "2015-05-12"
  },
  {
    "value": 101,
    "day": "2016-03-20"
  },
  {
    "value": 352,
    "day": "2015-06-15"
  },
  {
    "value": 313,
    "day": "2016-07-18"
  },
  {
    "value": 89,
    "day": "2015-04-12"
  },
  {
    "value": 282,
    "day": "2015-11-02"
  },
  {
    "value": 231,
    "day": "2016-08-22"
  },
  {
    "value": 362,
    "day": "2015-04-19"
  },
  {
    "value": 266,
    "day": "2016-09-25"
  },
  {
    "value": 30,
    "day": "2016-01-21"
  },
  {
    "value": 329,
    "day": "2015-09-30"
  },
  {
    "value": 237,
    "day": "2015-05-25"
  },
  {
    "value": 155,
    "day": "2017-06-07"
  },
  {
    "value": 74,
    "day": "2018-02-16"
  },
  {
    "value": 190,
    "day": "2017-10-07"
  },
  {
    "value": 199,
    "day": "2016-07-29"
  },
  {
    "value": 118,
    "day": "2015-04-09"
  },
  {
    "value": 106,
    "day": "2016-03-02"
  },
  {
    "value": 136,
    "day": "2017-12-12"
  },
  {
    "value": 136,
    "day": "2016-03-27"
  },
  {
    "value": 105,
    "day": "2017-06-17"
  },
  {
    "value": 373,
    "day": "2018-05-31"
  },
  {
    "value": 158,
    "day": "2015-06-12"
  },
  {
    "value": 241,
    "day": "2017-05-06"
  },
  {
    "value": 92,
    "day": "2018-01-28"
  },
  {
    "value": 58,
    "day": "2018-05-29"
  },
  {
    "value": 83,
    "day": "2016-06-22"
  },
  {
    "value": 351,
    "day": "2016-03-17"
  },
  {
    "value": 171,
    "day": "2015-04-05"
  },
  {
    "value": 130,
    "day": "2017-07-13"
  },
  {
    "value": 96,
    "day": "2015-08-15"
  },
  {
    "value": 343,
    "day": "2016-12-30"
  },
  {
    "value": 358,
    "day": "2016-10-29"
  },
  {
    "value": 107,
    "day": "2018-05-28"
  },
  {
    "value": 219,
    "day": "2018-01-21"
  },
  {
    "value": 200,
    "day": "2017-05-28"
  },
  {
    "value": 54,
    "day": "2015-10-02"
  },
  {
    "value": 274,
    "day": "2017-11-02"
  },
  {
    "value": 151,
    "day": "2018-08-04"
  },
  {
    "value": 239,
    "day": "2016-10-04"
  },
  {
    "value": 172,
    "day": "2016-11-02"
  },
  {
    "value": 347,
    "day": "2016-11-09"
  },
  {
    "value": 211,
    "day": "2016-12-20"
  },
  {
    "value": 333,
    "day": "2017-09-23"
  },
  {
    "value": 398,
    "day": "2017-07-01"
  },
  {
    "value": 169,
    "day": "2016-02-09"
  },
  {
    "value": 371,
    "day": "2016-08-01"
  },
  {
    "value": 137,
    "day": "2016-10-26"
  },
  {
    "value": 294,
    "day": "2016-02-25"
  },
  {
    "value": 54,
    "day": "2016-01-25"
  },
  {
    "value": 291,
    "day": "2017-11-20"
  },
  {
    "value": 230,
    "day": "2015-05-21"
  },
  {
    "value": 189,
    "day": "2016-07-14"
  },
  {
    "value": 371,
    "day": "2016-10-17"
  },
  {
    "value": 216,
    "day": "2015-05-27"
  },
  {
    "value": 262,
    "day": "2017-03-01"
  },
  {
    "value": 395,
    "day": "2015-07-31"
  },
  {
    "value": 19,
    "day": "2017-10-13"
  },
  {
    "value": 139,
    "day": "2018-04-07"
  },
  {
    "value": 340,
    "day": "2017-06-24"
  },
  {
    "value": 41,
    "day": "2016-11-29"
  },
  {
    "value": 139,
    "day": "2015-12-09"
  },
  {
    "value": 51,
    "day": "2017-10-14"
  },
  {
    "value": 3,
    "day": "2016-06-19"
  },
  {
    "value": 214,
    "day": "2018-05-30"
  },
  {
    "value": 374,
    "day": "2016-02-04"
  },
  {
    "value": 354,
    "day": "2017-03-11"
  },
  {
    "value": 90,
    "day": "2015-12-04"
  },
  {
    "value": 295,
    "day": "2016-04-01"
  },
  {
    "value": 256,
    "day": "2016-02-12"
  },
  {
    "value": 125,
    "day": "2016-02-28"
  },
  {
    "value": 103,
    "day": "2015-09-11"
  },
  {
    "value": 166,
    "day": "2017-06-12"
  },
  {
    "value": 64,
    "day": "2017-02-26"
  },
  {
    "value": 175,
    "day": "2017-07-25"
  },
  {
    "value": 271,
    "day": "2016-04-16"
  },
  {
    "value": 14,
    "day": "2016-12-22"
  },
  {
    "value": 383,
    "day": "2016-03-23"
  },
  {
    "value": 20,
    "day": "2018-02-11"
  },
  {
    "value": 72,
    "day": "2017-01-09"
  },
  {
    "value": 11,
    "day": "2015-09-24"
  }
]

const Left = () => {
  return (
    <div className='left'>
      <div className='top-left'>
        <span>safidy1863</span>
        <h1>Bonjour👋, Manohisafidy</h1>
      </div>
      <div className='description-user'>
        <span><FontAwesomeIcon icon={faUser} /> ROBUSTE Manohisafidy Vatsisoa Mario</span>
        <span><FontAwesomeIcon icon={faAt} /> robustemmanuel@gmail.com</span>
        <span><FontAwesomeIcon icon={faPhone} /> 034 63 975 18</span>
      </div>
      <div className='about-connection'>
        <div className='line'></div>
        <div className='about'>
          <div className='desc'>
            <h3><FontAwesomeIcon icon={faSignal}/> Statistiques de données aujourd'hui</h3>
            <h6>Temps restant: 4h 30min 45s</h6>
            <h6>Temps du connection: 1h 30min 20s</h6>
          </div>
          <div className='circle'>
          <CircularProgressbar value={66} text={`${66}%`} />
          </div>
        </div>

        <div className='about'>
          <div className='desc'>
            <h3><FontAwesomeIcon icon={faSignal}/> Statistiques de données aujourd'hui</h3>
            <h6>Temps restant: 4h 30min 45s</h6>
            <h6>Temps du connection: 1h 30min 20s</h6>
          </div>
          <div className='circle'>
            <CircularProgressbar value={66} text={`${66}%`} />
          </div>
        </div>
      </div>

      <div className='nivo'>
        <div className='line'></div>
        <div className='chart'>
          <ResponsiveCalendar
            data={data}
            from="2016-03-01"
            to="2016-07-12"
            emptyColor="#172e51d2"
            colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
            yearSpacing={40}
            monthBorderColor="#7676764c"
            dayBorderWidth={2}
            dayBorderColor="#010C1E"
            isInteractive={false}
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
              }
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default Left