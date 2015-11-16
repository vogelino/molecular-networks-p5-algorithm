# Algorithms for generative design: Course documentation of Lucas Vogel @vogelino

This is the first of three projects that emerged within the course [“Input Output - Introduction to process-oriented design”]( https://fhp.incom.org/workspace/6176) supervised by [Fabian Morón Zirfas]( http://fabianmoronzirfas.me/).

In this course, I learned to design by defining automated processes that follow precise rules. I could experience how generative design can improve productivity. Also, I grasped how infinite the amount of possible designs can be created with a smartly meshed algorithm. Designs that could never be created by hand using graphic design tools such as photoshop or illustrator. It showed me that an understanding of coding technologies is a really powerful asset for designer that has to be taken as advantage.

---

## Introduction to algorithms

Before writing anything in a code editor, we (students) had to train our minds to describe tasks and processes in a clear way, leaving no room for misinterpretation.

The first exercise of the course has been to write an algorithm in 3 minutes in a human-readable language (common language). These lines of _commands_ had to tell the executant how to draw something on a piece of paper. On the first class, every student wrote a bunch of rules on a paper sheet and gave it to another student so he/she could execute it.

Here’s how my first algorithm rules looked like:
```
- Circles, not filled
- Varying sizes
- Not touching or crossing each other
- Few space between them
- Filled canvas (with the circles)
- Most consistent space between the circles as possible
- Black pen
- Randomly some circles drawn with dots
```

And that how the executed results looked like:

<img src="https://cloud.githubusercontent.com/assets/2759340/11172458/38451db2-8c08-11e5-82db-7da10b04136d.jpg" width="19%" style="display: inline-block;" />
<img src="https://cloud.githubusercontent.com/assets/2759340/11172459/3849209c-8c08-11e5-9c10-c23d6c562707.jpg" width="19%" style="display: inline-block;" />
<img src="https://cloud.githubusercontent.com/assets/2759340/11172460/384ac5f0-8c08-11e5-8db5-c92f1633907a.jpg" width="19%" style="display: inline-block;" />
<img src="https://cloud.githubusercontent.com/assets/2759340/11172461/384d31a0-8c08-11e5-93df-ea8e9a9f4176.jpg" width="19%" style="display: inline-block;" />
<img src="https://cloud.githubusercontent.com/assets/2759340/11172463/385b821e-8c08-11e5-9137-8175c5409e05.jpg" width="19%" style="display: inline-block;" />

In my case, the results were surprisingly similar to what I expected. Anyway, I still discovered some _aspects_ that differed from my first idea:
- All execution have been made with a pencil instead of using a black pencil as described.
- In many cases the canvas was not completely filled with circle. Probably because of the execution time limit of 3 minutes or because I did expect too much form the executants.
- The last rule was followed only by the first time and other drawings used dots instead of drawing circles of dotted strokes or didn't even include them.
- In the last drawing, the circles are surrounded by penciled black surface. I expect this to be like this in order to show that the circles are not filled (rue 1). But by boing that, the executant actually turned the circles into circles filled with white on a dark surface. Maybe, maybe not. This is a question of point of view...

For most students, the results were very different as the initial expectation. We can say that it was a good lesson. It showed me that most people don’t get it the way I do. I could argue that the executants were too dumb to perceived what I wanted drawn at the end, but in front of a computer, I’ve would have been the only one to blame! That's the point I think! :)

---

## Corrections and retry in a bigger scale
After this first exercise we got an assignment: _Improve the algorithm and to make it executed 10 times by non-designers._

So, I arranged my algorithm to be more complete and precise:
```
Read the full algorithm before drawing anything. Be aware of the freedom that is been allowed to you.

Drawn on the paper sheet:
- With a pencil
- A rectangle
- From any height or width
- Parallel to the sheet of paper (not crosswise)
- Drawn softly so you can easily erase it later on

Inside the rectangle
- With a 2mm wide black pen
- Circles
- Various sizes, willingly alternately
- That do not overlap or contain itself
- Few space between the circles
- Circles fill the inside of the rectangle
- From time to time, the circles are drawn with dotted strokes
- Circles that overlap the sides of the rectangle will be closed with straight lines

At the end

- With an eraser
- Erase the outline of the rectangle
```

At the office @ubermetrics I asked 10 people to execute this algorithm and look how what results emerged from that:

<img src="https://cloud.githubusercontent.com/assets/2759340/11172462/3859b682-8c08-11e5-849f-38c9d253bc23.jpg" width=19%" style="display: inline-block" />
<img src="https://cloud.githubusercontent.com/assets/2759340/11172464/385e1dda-8c08-11e5-8388-50bfdc112763.jpg" width=19%" style="display: inline-block" />
<img src="https://cloud.githubusercontent.com/assets/2759340/11172466/386565ea-8c08-11e5-949e-3fe9230932e3.jpg" width=19%" style="display: inline-block" />
<img src="https://cloud.githubusercontent.com/assets/2759340/11172465/386510f4-8c08-11e5-854a-6f048071a187.jpg" width=19%" style="display: inline-block" />
<img src="https://cloud.githubusercontent.com/assets/2759340/11172467/386dde5a-8c08-11e5-8abf-89331c124985.jpg" width=19%" style="display: inline-block" />
<img src="https://cloud.githubusercontent.com/assets/2759340/11172469/38749362-8c08-11e5-8082-a470458637d7.jpg" width=19%" style="display: inline-block" />
<img src="https://cloud.githubusercontent.com/assets/2759340/11172468/38730268-8c08-11e5-90cb-46a7971cb02d.jpg" width=19%" style="display: inline-block" />
<img src="https://cloud.githubusercontent.com/assets/2759340/11172470/387d3c42-8c08-11e5-9252-0180d8b598b7.jpg" width=19%" style="display: inline-block" />
<img src="https://cloud.githubusercontent.com/assets/2759340/11172471/387d8c7e-8c08-11e5-9e4b-ce1682d327f3.jpg" width=19%" style="display: inline-block" />
<img src="https://cloud.githubusercontent.com/assets/2759340/11172472/388585b4-8c08-11e5-96b2-4e09f59a207c.jpg" width=19%" style="display: inline-block" />
