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

<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/Algorithm-01-result-1.jpg" width="19%" style="display: inline-block;" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/Algorithm-01-result-2.jpg" width="19%" style="display: inline-block;" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/Algorithm-01-result-3.jpg" width="19%" style="display: inline-block;" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/Algorithm-01-result-4.jpg" width="19%" style="display: inline-block;" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/Algorithm-01-result-5.jpg" width="19%" style="display: inline-block;" />

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

<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/Algorithm-02-result-1.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/Algorithm-02-result-2.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/Algorithm-02-result-3.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/Algorithm-02-result-4.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/Algorithm-02-result-5.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/Algorithm-02-result-6.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/Algorithm-02-result-7.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/Algorithm-02-result-8.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/Algorithm-02-result-9.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/Algorithm-02-result-10.jpg" width="19%" style="display: inline-block" />
