const projectsData = [
    {
      title: "ProductListing App",
      description: "A product listing app using FreeAPI where users can explore product details effortlessly.",
      tools: ["React.js", "Shadcn UI", "Third-Party API - FreeApi"],
      hosting: "Netlify",
      image: "https://media-hosting.imagekit.io//ea3c6651275e453a/Screenshot%20(7).png?Expires=1832861039&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=dQ1h7q~Ay-ZFP9wJ02eAJt59UzAMQFJT1odJyuSmqckAR2YsI3Hm3aHQULWXI2EhtI748t9KScfN5~oKzONpK9rg-UId3jcTxRxozc9KOH9Qez6e4JYJiEN1TZVsQ6Kk8xOBY0rQQ8~EAxr3FyNKveqBa7htSgWue0Va4VvR2mqi57MLTnBPwj~6~gbnGJHT4Kl~O9YCwmDvygY4wSM37XbYTRLweugxjImnNRP1dZbLYzTxxwjdOg9DR5gNCMuv-jhI9pNstWO8TGU8C1z4XXulc1qXXQsetloD9xUef0iBx3uXHB5HymEE8vO8NIYHqif1xi8kY8Ipir3yZJNV-g__",
      link : "https://freeapi150.netlify.app/"
    },
    {
      title: "GitHub User Detail",
      description: "Fetch and display GitHub user details including repositories, languages, and project descriptions.",
      tools: ["HTML", "CSS", "JavaScript", "GitHub API"],
      hosting: "GitHub Pages",
      image: "https://media-hosting.imagekit.io//8edbb294e0184bec/Screenshot%20(8).png?Expires=1832862624&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lTZo9C1Krk6zYl9BS8ILu2oMVg2ISx6UYNLfdxBe2fgF2Lkfg1i1HODpL4tjjCuveVDkH9aHyuF8ND96IzXjdFKDgXwwiFHpgDe2GWr-xSSof9RSVf~VL~-ydTO~a2lnrWTlz1aKD4HaltgCamtQSaG9NXMj684y50PJKg8qm2LScwNcLxqYaevac6TZOyaqu915v~fo8Q-mKTqgm8j6B9QisjhytwIhJg0CGlBjE9Atw9XH8snDj3lT-q~8wKOS6c7CjB-Y9pqp5mtGE-on7NnEs6NVt0vZYN-OeksmrPKfKKzYMTVGjFBkDVZz076~LCiusnltv1bdRHYMwrawlQ__",
      link : "https://gitusers123.netlify.app/"

    },
    {
      title: "Simple Blog",
      description: "A MERN stack blog platform where users can post, edit, and manage blog entries.",
      tools: ["MongoDB", "Express", "React", "Node.js"],
      hosting: "Vercel",
      image: "https://media-hosting.imagekit.io//58428bcf20b24727/Screenshot%20(10).png?Expires=1832863141&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yUEl-NoiZNrTpi9cwjNNQtbHTanUMNKG6iSSuCEgN3bA0fEa0bzp~lApiZNUuJq1bN2d~G8iRSrjbEyk0~7LlAwIf9z~9GevYjAKP9y3nVgFkXQRQpffdyfqr~40bX4SbiD~h7i98PZnQVFG7ratZpIzTfdzlCbzphIGXQmmbfAEzTR5IJoa-dNd9FQaCk3z~7oZMl8f9whckL7OLwiAsa8vjgAUvPYTXYXtsg8CdZN36bW6rTTayWCrND9uVmm2io7rT0eo~E2sCa51tnFldmm4WGCYGakimsF9EHA~DqGBuaUIGdkzm-eXnb3R-n2oLp3YaDoQu0y~-8C47UbwDw__",
      link : "https://med-blog-site-i5jlvupz8-chandan-vishwakarmas-projects-a080a5af.vercel.app/"
    },
    {
      title: "MovieSite",
      description: "A site where user can show movie details",
      tools: [ "HTML", "CSS", "React.js", "IMDB api"],
      hosting: "Vercel",
      image: "https://media-hosting.imagekit.io//9ec213d012d548ac/Screenshot%20(9).png?Expires=1832862741&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lfbf5yYKwkbNuggPGeXE~bzk7LxWYwUys9UG~o4qBR-xL2ZFU7U0gKh-Es6dvZVtrDcPd7-UgO4AnTJyIIVq1YwOipu-D0FKbSQuS5f7texjdVjFCcCgFbM2siqV1HFMS6dlYtwV40ILNugAZrhGWnICVuattZHZx15wmjO-ADKSYYjMPv0IMnTlgL-jNG4QN4LpqLjiIx1cV6-YGJ7Epc42t8A0hfpb~o3ykVJw5OnAkhqnt9FRSCG7SqHUPR2ol91pyoB3LXSyzOc1x6SEcTso5x5lyCLQnnTTakyXk1W60jpTKfxmzvZtQv6Hb~VeFHQRjm-yPPxYF2spbsG5CA__",
      link : "https://movieinfosite1.netlify.app/"
    },
    {
      title: "MovieSite",
      description: "A site where user can show movie details",
      tools: [ "HTML", "CSS", "React.js", "food api"],
      hosting: "Vercel",
      image: "https://media-hosting.imagekit.io//5eab41f573cf45f5/Screenshot%20(12).png?Expires=1832863807&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WW9uDn-CdQUHr0AK6I~EXiOCB8gvi5wq40lbjiqKnJN5ArjL2zfohg~aetVUqrU9KKTo0WEZLHCaOQtm33cDrrJQyyquxralhPuqeHql5avQ54Mw5sEtaMzb28nPAh6R-SYMZjrOdFbrX8OwcrXlGPsRyxo5ybbnQ6GCXcYee6BxTwZXkWMtmlWlBO8084cnKQKlpLQHLV6uYVK3pkm5~-z9~y4~LR4po-c0qBC7Is8hL4CGMcTmjdBOBMnm9RDl9TrT4hMbqTgB7Atrr6D~E8o8Om0mW-1~Q2mv~wXeXAl4jB98L8quLdygh5Hi6XwI4YSY6OqcjxSruuQ92uY4Mw__",
      link : "https://food-recipe-app-jade.vercel.app/"
    },
    {
      title: "BlocklyEditor",
      description: "A site where user can show movie details",
      tools: [ "HTML", "CSS", "React.js", "Blockly library"],
      hosting: "Vercel",
      image: "https://media-hosting.imagekit.io//8406a072ae644cfd/Screenshot%20(14).png?Expires=1834673743&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0uppJJZ-N7Dwnic6mDkxCl3j1M0ucKkoLXdyzyZcw-JjCgQctAEoorAZOsUZlEZGEuwBRF8tqUXEeZQehTf-G1wAJdXxTOQmjY9yJk4q75LbE9T68b6bmSkxe8AoeCRdASbpWLuGKc36RaAIwHHhDdhfDDqM9bfhm3c75ZF9viDBgQm1Te4OyBWLOX0nfW0qT9IDYjnGMbnuKOkFYAGYw91HvGWW3SN3dy3yDTECWSmuZJEmsY9noZGoFz~yw3Zw44fibCZ9NiY~AuLQVWwYpjtzJcc8GtsgtzAqbiO0ZYdOZ~YppZAZ5sGgDGYiSoQwK2xqFrxCm1PGEHnfc0LE6g__",
      link : "https://blocklyeditor002.netlify.app/"
    },
  ];

export default projectsData;
