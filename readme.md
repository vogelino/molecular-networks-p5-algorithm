# Molecular networks: Uniques generated patterns

Setting up automated processes that follow precise rules can improve productivity and lead to surprising results. An infinite amount of possible designs can be generated from smartly meshed algorithms. Variations that would take hours to create using graphic design tools can that way be delivered in seconds. Process-oriented design is a really powerful asset to designer and has to be taken as advantage.

#### [Demo](https://vogelino.github.io/molecular-networks-p5-algorithm/)
#### Installation
```
git clone https://github.com/vogelino/molecular-networks-p5-algorithm.git
cd molecular-networks-p5-algorithm
npm install
```

#### Use
Run `gulp` and open `http://localhost:3000`

#### Deploy to gh-pages
```
gulp deploy
```

---

## The algorithm
The molecular networks algorithms is the result of many experimentations and exercises done at the course [“Input Output - Introduction to process-oriented design”]( https://fhp.incom.org/workspace/6176) supervised by [Fabian Morón Zirfas](https://github.com/fabiantheblind).


The first exercise of the course has been to write an algorithm in 3 minutes in a human-readable language (common language). These lines of _commands_ had to tell the executant how to draw something on a piece of paper. Every student wrote a bunch of rules on a sheet of paper and gave it to the next student so he/she could execute it.

Here’s how the first algorithm rules looked like:
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

And the executed results:

<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/analogAlgorithms/classAlgorithm/1.jpg" width="19%" style="display: inline-block;" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/analogAlgorithms/classAlgorithm/2.jpg" width="19%" style="display: inline-block;" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/analogAlgorithms/classAlgorithm/3.jpg" width="19%" style="display: inline-block;" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/analogAlgorithms/classAlgorithm/4.jpg" width="19%" style="display: inline-block;" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/analogAlgorithms/classAlgorithm/5.jpg" width="19%" style="display: inline-block;" />

Some parts of the algorithm's steps may not have been described precisely enough or have been disregarded, but the output is mostly loyal to my original expectations. Time has not been seriously taken in consideration and it led to unfinished results. Also, the interpretation of some rules has been different from executant to executant. For example, the last result did interpret the rule `not filled` as white circles on a dark background. These differences have been analyzed and considered for the next version of the algorithm as room for improvement.

---

## Corrections and improvements
The second version of the algorithm attempts to avoid the misinterpretations of the first execution. Rules increased as well as the amount of executants:

<pre style="word-wrap: break-word;"><code style="word-wrap: break-word;">
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
</code></pre>

10 people executed the algorithm. Here are the results:

<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/analogAlgorithms/homeworkVersion1/1.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/analogAlgorithms/homeworkVersion1/2.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/analogAlgorithms/homeworkVersion1/3.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/analogAlgorithms/homeworkVersion1/4.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/analogAlgorithms/homeworkVersion1/5.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/analogAlgorithms/homeworkVersion1/6.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/analogAlgorithms/homeworkVersion1/7.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/analogAlgorithms/homeworkVersion1/8.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/analogAlgorithms/homeworkVersion1/9.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/analogAlgorithms/homeworkVersion1/10.jpg" width="19%" style="display: inline-block" />

Even if small unexpected differences by the execution happened, all are quite accurate. Despite the variations, Results became more visually consistent. The use of dedicated material created unity and a more unique look. Nevertheless, the lack of freedoms leaved to the executants led to a less original and dynamic final picture.

## Inserting personal dimensions
To add freedom and to integrate external sources of variations, personal dimension became part of the algorithm. Executants were asked to integrate informations about their near family with the intent to become unique results for each execution.

Here is the algorithm:
<pre style="word-wrap: break-word;"><code style="word-wrap: break-word;">
On the given sheet of paper:

- Draw with a pencil a closed form of free size and position. This form (the unity form) can be composed by straight and curved lines as well as by distinct angles. However, it shouldn't become too complex, because it won't make you the work easier later on. This form represents your near family (parents, brothers and sisters).
- For every member of your family assign following colors:
    - Sisters: Light blue
    - Brothers: Apple green
    - Mother(s): Purple
    - Father(s): Salmon pink
- For every member of your family assign also a free but non figurative form (The person form), that should represent this person. This form doesn't necessarily be a basic shape (circle, square, triangle, etc.).
- Fill the family form with person forms in the appropriate color. Use for that the given néocolors. Every member of your family can be drawn many times in the family form. The more you see each member of your family, the more present its form will be represented (by repeating it, changing its size or using another visual dimension). Person forms cannot exceed the family form.
- Erase the family form so that we only discern it by the accumulation of its contents.

It's over, thank you for your time!
</code></pre>

And here the results:

<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/analogAlgorithm/homeworkVersion2/1.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/analogAlgorithm/homeworkVersion2/2.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/analogAlgorithm/homeworkVersion2/3.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/analogAlgorithm/homeworkVersion2/4.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/analogAlgorithm/homeworkVersion2/5.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/analogAlgorithm/homeworkVersion2/6.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/analogAlgorithm/homeworkVersion2/7.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/analogAlgorithm/homeworkVersion2/8.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/analogAlgorithm/homeworkVersion2/9.jpg" width="19%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/analogAlgorithm/homeworkVersion2/10.jpg" width="19%" style="display: inline-block" />

Every sheet of paper became different and there still was a unity between every drawings. The use of color and the fact that all of them got forms maintained in a wrapper form led to this unity. There is one story and one explanation for every execution. Multiple layers come to the game, the visual and personal aspect.

If the goal has been to give the executants more freedom in order to get more various results, we can say it has been reached. However, even if that process is interesting, it has more of a psychoanalysis test than a pure algorithm. Also, it defers quite a lot from the previous one and the link is hard to grasp.
That's what made the translation to a first coded version complicated.


## Getting confident with p5.js
The next step after the analogous algorithm was to translate it in code. Accordingly, a javascript processing library called [p5.js](http://p5js.org/) was used. In order to get confident with the syntax and the possibilities of p5.js, following exercises have been made:

**Exercice 1**: Draw a man with primitive form in 10 minutes:

<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/exercises/drawAPerson.png" width="32%" style="display: inline-block; margin: 0 10px 5px 0;" />
Using basic shapes, I draw jesus with a moving halo!

**Exercice 2**: Draw an interesting color composition with HSB in 10 minutes:

<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/exercises/useColorMode.png" width="32%" style="display: inline-block; margin: 0 10px 5px 0;" />
Using the hue of an inout color, I created a color triad.

**Exercice 3**: Using javascript loops, create an interesting pattern in 10 minutes:

<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/exercises/forLoop.png" width="32%" style="display: inline-block; margin: 0 10px 5px 0;" />
Using an exponential increase of repeated ellipses, I drew this pattern.


## Translating the algorithm in p5js:
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/triesAndEperiments/1.png" width="24%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/triesAndEperiments/2.png" width="24%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/triesAndEperiments/3.png" width="24%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/triesAndEperiments/4.png" width="24%" style="display: inline-block" />

The coded output was quite dissimilar from the results made by the executants. It loosed its base intention that was to include personal data as base for algorithmic rules. The interesting part that seemed to be appreciated is the use of the family as a variable. Our guest [Mey Lean Kronemann](http://meyleankronemann.de/) made the suggestion of investigating the topic of artificial life forms. The idea of forms representing families can be associated to flocking behaviors in biology and the aspect of the agglomerated circles to cells and/or bacterias. These hints were used as base for the next iteration of my algorithm.

## Cell- and molecular-like forms
The coded version of the algorithm was inspired by natural micro living forms, molecules, cells, DNA etc. The algorithm draws circles (cells) that are bound to their siblings creating that way families of nested networks.

See screenshots of the coding process:

<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/digitalAlgorithm/1.1.png" width="32%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/digitalAlgorithm/1.2.png" width="32%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/digitalAlgorithm/2.1.png" width="32%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/digitalAlgorithm/2.2.png" width="32%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/digitalAlgorithm/2.3.png" width="32%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/digitalAlgorithm/2.4.png" width="32%" style="display: inline-block" />

The step by step process of coding was meant to find the best way to connect circles together in a nice optic. Overlapping occurred and had to be avoided and variation was needed. Therefore, circles were displayed in a rows/columns system that took care of avoiding overlapping.

<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/digitalAlgorithm/3.1.png" width="32%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/digitalAlgorithm/3.2.png" width="32%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/digitalAlgorithm/3.3.png" width="32%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/digitalAlgorithm/3.4.png" width="32%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/v004.1.png" width="32%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/v004.2.png" width="32%" style="display: inline-block" />

The rows/columns system was a good solution for avoiding overlapping but the grid became really present, too present. Life forms are sometimes represented in a geometrical way but rarely look so in reality. The result had to look more natural and organic.

Disorder was needed. In order to achieve this disorder, each element of the grid has been displaced with a noise in x and y. The pattern became interesting and still, the overlapping did not occur.

<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/digitalAlgorithm/5.1.png" width="49%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/digitalAlgorithm/5.2.png" width="50%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/digitalAlgorithm/5.3.png" width="100%" style="display: inline-block" />
<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/digitalAlgorithm/5.4.png" width="100%" style="display: inline-block" />

## What purpose for?
The idea that unique steel barriers could be produced is an interesting application. The algorithm could be used to generate a unique pattern for each piece of barrier. That is how it could look like:

<img src="https://raw.githubusercontent.com/vogelino/molecular-networks-p5-algorithm/master/documentation/images/simulation/simulation.jpg" width="100%" style="display: inline-block" />
