
        i=0
        let a=['ftrimg1.jpeg','ftrimg2.png','ftrimg3.png','ftrimg4.webp','ftrimg5.png','ftrimg6.jpg','mt.jpeg']
        function fun()
        {
            let iref=document.getElementsByClassName("i1")
            i++
            i=i%7
            iref[0].src=a[i%7]
            iref[1].src=a[(i+1)%7]
            iref[2].src=a[(i+2)%7]
            iref[3].src=a[(i+3)%7]
        }
        setInterval(fun,3000)
        function fun1()
        {
            let iref=document.getElementsByClassName("i1")
            i--
            if (i<0)
            {
                i=a.length-1
            }
            i=i%7
            iref[0].src=a[i%7]
            iref[1].src=a[(i+1)%7]
            iref[2].src=a[(i+2)%7]
            iref[3].src=a[(i+3)%7]
        }
    