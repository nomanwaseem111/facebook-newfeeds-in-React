import React from 'react';
import ReactDOM  from 'react-dom';
import './style.css'


const MediaPage = ({profileImg,heading,time,text,imgUrl,like,comment,share}) => (
<div className='main'>

  <div className='inner'>

  <img className="profileImg" src={profileImg} alt=""/>
  <span className='heading'>{heading}  <br/> Yesterday at {time}</span>
 
 
  
 </div>
 
<p>{text}</p>
<img className="imgUrl" src={imgUrl} alt=""/>
<div className='main2'>
<div className='small_img'>
<img className="img1"src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" alt="" />
<img className="img1"src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e" alt="" />
<img className="img1"src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='10.25%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FEEA70'/%3e%3cstop offset='100%25' stop-color='%23F69B30'/%3e%3c/linearGradient%3e%3clinearGradient id='d' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23472315'/%3e%3cstop offset='100%25' stop-color='%238B3A0E'/%3e%3c/linearGradient%3e%3clinearGradient id='e' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23191A33'/%3e%3cstop offset='87.162%25' stop-color='%233B426A'/%3e%3c/linearGradient%3e%3clinearGradient id='h' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23E78E0D'/%3e%3cstop offset='100%25' stop-color='%23CB6000'/%3e%3c/linearGradient%3e%3clinearGradient id='i' x1='50%25' x2='50%25' y1='81.899%25' y2='17.94%25'%3e%3cstop offset='0%25' stop-color='%2335CAFC'/%3e%3cstop offset='100%25' stop-color='%23007EDB'/%3e%3c/linearGradient%3e%3clinearGradient id='j' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%236AE1FF' stop-opacity='.287'/%3e%3cstop offset='100%25' stop-color='%23A8E3FF' stop-opacity='.799'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.921365489 0 0 0 0 0.460682745 0 0 0 0 0 0 0 0 0.35 0'/%3e%3c/filter%3e%3cfilter id='g' width='111.4%25' height='137.5%25' x='-5.7%25' y='-18.8%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='.5'/%3e%3cfeOffset in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.0411226772 0 0 0 0 0.0430885485 0 0 0 0 0.0922353316 0 0 0 0.819684222 0'/%3e%3c/filter%3e%3cpath id='b' d='M16 8A8 8 0 110 8a8 8 0 0116 0'/%3e%3cpath id='f' d='M3.599 8.8c0-.81.509-1.466 1.134-1.466.627 0 1.134.656 1.134 1.466 0 .338-.089.65-.238.898a.492.492 0 01-.301.225c-.14.037-.353.077-.595.077-.243 0-.453-.04-.595-.077a.49.49 0 01-.3-.225 1.741 1.741 0 01-.239-.898zm6.534 0c0-.81.508-1.466 1.133-1.466.627 0 1.134.656 1.134 1.466 0 .338-.089.65-.238.898a.49.49 0 01-.301.225 2.371 2.371 0 01-1.189 0 .49.49 0 01-.301-.225 1.74 1.74 0 01-.238-.898z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='url(%23d)' d='M5.333 12.765c0 .137.094.235.25.235.351 0 .836-.625 2.417-.625s2.067.625 2.417.625c.156 0 .25-.098.25-.235C10.667 12.368 9.828 11 8 11c-1.828 0-2.667 1.368-2.667 1.765'/%3e%3cuse fill='url(%23e)' xlink:href='%23f'/%3e%3cuse fill='black' filter='url(%23g)' xlink:href='%23f'/%3e%3cpath fill='%234E506A' d='M4.616 7.986c.128.125.136.372.017.551-.12.178-.32.222-.448.096-.128-.125-.135-.372-.017-.55.12-.179.32-.222.448-.097zm6.489 0c.128.125.136.372.018.551-.12.178-.32.222-.45.096-.127-.125-.134-.372-.015-.55.119-.179.319-.222.447-.097z'/%3e%3cpath fill='url(%23h)' d='M4.157 5.153c.332-.153.596-.219.801-.219.277 0 .451.119.55.306.175.329.096.401-.198.459-1.106.224-2.217.942-2.699 1.39-.301.28-.589-.03-.436-.274.154-.244.774-1.105 1.982-1.662zm6.335.087c.099-.187.273-.306.55-.306.206 0 .469.066.801.219 1.208.557 1.828 1.418 1.981 1.662.153.244-.134.554-.435.274-.483-.448-1.593-1.166-2.7-1.39-.294-.058-.371-.13-.197-.459z'/%3e%3cpath fill='url(%23i)' d='M13.5 16c-.828 0-1.5-.748-1.5-1.671 0-.922.356-1.545.643-2.147.598-1.258.716-1.432.857-1.432.141 0 .259.174.857 1.432.287.602.643 1.225.643 2.147 0 .923-.672 1.671-1.5 1.671'/%3e%3cpath fill='url(%23j)' d='M13.5 13.606c-.328 0-.594-.296-.594-.66 0-.366.141-.613.255-.852.236-.498.283-.566.339-.566.056 0 .103.068.339.566.114.24.255.486.255.851s-.266.661-.594.661'/%3e%3c/g%3e%3c/svg%3e" alt="" />

</div>
<div>
<span className='shares'>328 Comments 1.1k Shares</span>
</div>
</div>
<hr/>
 <div className="footer">
  <button>{like}</button>
  <button>{comment}</button>
  <button>{share}</button>
 </div> 
</div>

)

ReactDOM.render(<><MediaPage profileImg="https://scontent.fkhi27-1.fna.fbcdn.net/v/t1.6435-9/118611684_107392234432533_4346861770774893684_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF1NmFJr2K4mesU99jBMQGHeQs2CngoeHp5CzYKeCh4eqFzB0CFer8rFMrd-0otqmqJSrHqJvO-fj08Od0_ESQu&_nc_ohc=BuP5dzt0TzYAX9Er4nv&_nc_ht=scontent.fkhi27-1.fna&oh=00_AT-R9chyeKy_m_kyAGEFpr0ZXnjmy0IVOKB_CQnrKOMmpQ&oe=6340000F" 
heading="Noman" time="4 hrs" text="Art of the day! ❤️" 

imgUrl="https://scontent.fkhi27-1.fna.fbcdn.net/v/t39.30808-6/305749623_10158976104482555_811741553508843771_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHV4MALTXL1oEIzeBqpjbyD4NGwsa8jmvzg0bCxryOa_Pt2C6CmtGWcZKCdkT6BeNMQOLfXDN6sDLeRquiofeyn&_nc_ohc=5o3Wh5W13SQAX_zprjx&_nc_ht=scontent.fkhi27-1.fna&oh=00_AT9b9kyvzBqvQcLhqNq4Vp9sxDjSu6IwGjrMqKZEzg3Eog&oe=6322978C"
like="Like" comment="Comment" share="Share"
/>


<MediaPage profileImg="https://scontent.fkhi27-1.fna.fbcdn.net/v/t1.6435-9/118611684_107392234432533_4346861770774893684_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF1NmFJr2K4mesU99jBMQGHeQs2CngoeHp5CzYKeCh4eqFzB0CFer8rFMrd-0otqmqJSrHqJvO-fj08Od0_ESQu&_nc_ohc=BuP5dzt0TzYAX9Er4nv&_nc_ht=scontent.fkhi27-1.fna&oh=00_AT-R9chyeKy_m_kyAGEFpr0ZXnjmy0IVOKB_CQnrKOMmpQ&oe=6340000F" 
heading="Abdul Hameed" time="7 hrs" text="Number 1 for a reason.😍" 

imgUrl="https://scontent.fkhi11-2.fna.fbcdn.net/v/t39.30808-6/306445485_5306248969494984_8522606104683312708_n.png?stp=dst-png_p526x296&_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHrf3_aME9MBYxylJ1m17UEKrnQjXevU7AqudCNd69TsKClz5_qF-T3aSEGpTC19wY77Rx-oiAUGUwoSWTqafHO&_nc_ohc=h9a9zQGET6EAX_TSR8u&_nc_ht=scontent.fkhi11-2.fna&oh=00_AT_4EY6-kEqwXe7gAkYkHjDdVkG1frrqOpqb66eIMaklIA&oe=6321E6E5"
like="Like" comment="Comment" share="Share"
/>

<MediaPage profileImg="https://scontent.fkhi27-1.fna.fbcdn.net/v/t39.30808-6/298331085_172504878676358_4773379386592993296_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHJgj0iHhCaNbA7ySAhn13EtAq0ydk_vmG0CrTJ2T--Yb2VveAb91DidZ8sPoGO19OQ9n7XIqyzVvY6UJ-cuVpO&_nc_ohc=pNeng0FcA6QAX9WVGQL&_nc_ht=scontent.fkhi27-1.fna&oh=00_AT9KhVetOi6Djlxkcnmip1OES7Fs-qD_6c2Xi1DsSbLujQ&oe=632159F6" 
heading="Noman" time="8 hrs" text="Four Fox extends its heartfelt emotions of appreciation on the big day of Khudaish Gulzaar, whose contributions as a family member have made the advance towards the ever-increasing venues of recognition and success possible. Here’s to a great year of adventures on sunlit vistas. 
Wishing you a very Happy Birthday, 
#fourfoxofficial #fourfox #fourfoxofficialbirthday #career #events #birthday #karachi #birthdayboy #KarachiJobs" 

imgUrl="https://scontent.fkhi27-1.fna.fbcdn.net/v/t39.30808-6/305965251_589324506239301_1128748778272122526_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHpofk_i7tQYzJzRYZlbELzAn4W_xKWedYCfhb_EpZ51tBLNhdZrrUyOSxGUgoGuAYP72ii6Cl_pPQcx23uwo5c&_nc_ohc=vCZCBGMx5SIAX_60f2I&_nc_ht=scontent.fkhi27-1.fna&oh=00_AT8-rn51b5Tzy8JVrEPmUbg9S0SX2KM9klqn2UU3NBZThQ&oe=6320AE47"
like="Like" comment="Comment" share="Share"
/>


<MediaPage profileImg="https://scontent.fkhi27-1.fna.fbcdn.net/v/t39.30808-6/298331085_172504878676358_4773379386592993296_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHJgj0iHhCaNbA7ySAhn13EtAq0ydk_vmG0CrTJ2T--Yb2VveAb91DidZ8sPoGO19OQ9n7XIqyzVvY6UJ-cuVpO&_nc_ohc=pNeng0FcA6QAX9l8c1-&_nc_ht=scontent.fkhi27-1.fna&oh=00_AT-0GQk6-akvOhYK1osWutfjwOWGGEer6WjYGohRqmFJHw&oe=632159F6" 
heading="Abdul Hameed" time="3 hrs" text="Netizen has savage reply for Shaan Shahid for his comments on Fakhar Zaman’s performance during the Asia Cup match" 

imgUrl="https://scontent.fkhi11-2.fna.fbcdn.net/v/t39.30808-6/305450674_429015112663702_388005574497913742_n.jpg?stp=dst-jpg_p526x296&_nc_cat=1&ccb=1-7&_nc_sid=5cd70e&_nc_eui2=AeEfR1LZVjTnIsfSfFQNrcixySW1QfMeJd7JJbVB8x4l3ihErOHmZcER8jaKmiNEBKGDPYMAgc_xg303C-MAb7KX&_nc_ohc=uSF08sfGU-8AX-6lDFT&_nc_ht=scontent.fkhi11-2.fna&oh=00_AT_9gnHN2O3T3TVy-Ifr17R3-7MsSk-bGApt_pi32o6akg&oe=63219233"
like="Like" comment="Comment" share="Share"
/>
<MediaPage profileImg="https://scontent.fkhi27-1.fna.fbcdn.net/v/t1.6435-9/118611684_107392234432533_4346861770774893684_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF1NmFJr2K4mesU99jBMQGHeQs2CngoeHp5CzYKeCh4eqFzB0CFer8rFMrd-0otqmqJSrHqJvO-fj08Od0_ESQu&_nc_ohc=BuP5dzt0TzYAX9Er4nv&_nc_ht=scontent.fkhi27-1.fna&oh=00_AT-R9chyeKy_m_kyAGEFpr0ZXnjmy0IVOKB_CQnrKOMmpQ&oe=6340000F" 
heading="Noman" time="8 hrs" text="Four Fox extends its heartfelt emotions of appreciation on the big day of Khudaish Gulzaar, whose contributions as a family member have made the advance towards the ever-increasing venues of recognition and success possible. Here’s to a great year of adventures on sunlit vistas. 
Wishing you a very Happy Birthday, 
#fourfoxofficial #fourfox #fourfoxofficialbirthday #career #events #birthday #karachi #birthdayboy #KarachiJobs" 

imgUrl="https://scontent.fkhi27-1.fna.fbcdn.net/v/t39.30808-6/305965251_589324506239301_1128748778272122526_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHpofk_i7tQYzJzRYZlbELzAn4W_xKWedYCfhb_EpZ51tBLNhdZrrUyOSxGUgoGuAYP72ii6Cl_pPQcx23uwo5c&_nc_ohc=vCZCBGMx5SIAX_60f2I&_nc_ht=scontent.fkhi27-1.fna&oh=00_AT8-rn51b5Tzy8JVrEPmUbg9S0SX2KM9klqn2UU3NBZThQ&oe=6320AE47"
like="Like" comment="Comment" share="Share"
/>

</>
,
 document.getElementById('root'));