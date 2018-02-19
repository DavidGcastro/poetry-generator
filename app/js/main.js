$(document).ready(function () {

    $("#words").on("keypress", function (e) {
        var currentValue = String.fromCharCode(e.which);
        var finalValue = $(this).val() + currentValue;
        if (finalValue > 10) {
            e.preventDefault();
        }
    });

    $("#lines").on("keypress", function (e) {
        var currentValue = String.fromCharCode(e.which);
        var finalValue = $(this).val() + currentValue;
        if (finalValue > 15) {
            e.preventDefault();
        }
    });


    $("#button").on("click", function (e) {
        $(".centered--content h2").addClass("hidden");
        $(".centered--content p").addClass("hidden");

        $("#poem").remove();
        if ($("#songSelect").val() === "triumph") {
            var str = "	What y'all thought y'all wasn't gon' see me? I'm the Osirus of this shit Wu-Tang is here forever, motherfuckers It's like this ninety-seven Aight my nigg** and my nigg***s Let's do it like this I'ma rub your ass in the moonshine Let's take it back to seventy-nine I bomb atomically, Socrates' philosophies And hypotheses can't define how I be droppin' these Mockeries, lyrically perform armed robbery Flee with the lottery, possibly they spotted me Battle-scarred shogun, explosion when my pen hits Tremendous, ultra-violet shine blind forensics I inspect view through the future see millennium Killa Beez sold fifty gold sixty platinum Shackling the masses with drastic rap tactics Graphic displays melt the steel like blacksmiths Black Wu jackets Queen Beez ease the guns in Rumblin' patrolmen tear gas laced the function Heads by the score take flight incite a war Chicks hit the floor, die hard fans demand more Behold the bold soldier, control the globe slowly Proceeds to blow swingin' swords like Shinobi Stomp grounds I pound footprints in solid rock Wu got it locked, performin' live on your hottest block As the world turns, I spread like germs Bless the globe with the pestilence, the hard-headed never learn It's my testament to those burned Play my position in the game of life, standing firm On foreign land, jump the gun out the frying pan, into the fire Transform into the Ghostrider, or Six Pack In A Streetcar Named Desire, who got my back? In the line of fire holding back, what? My peoples if you with me where the fuck you at? Niggas is strapped, and they trying to twist my beer cap It's court adjourned, for the bad seed from bad sperm Herb got my wig fried like a bad perm, what the blood Clot, we smoke pot, and blow spots You want to think twice, I think not The Iron Lung ain't got ta tell you where it's coming from Guns of Navarone, tearing up your battle zone Rip through your slums I twist darts from the heart, tried and true Loot my voice on the LP, my team is on to slang rocks Certified chatterbox, vocabulary 'Donna talking Tell your story walking Take cover kid, what? Run for your brother, kid Run for your team, and your six camp rhyme groupies So I can squeeze with the advantage, and get wasted My deadly notes reigns supreme Your fort is basic compared to mine Domino effect, arts and crafts Paragraphs contain cyanide Take a free ride on my thought, I got the fashion Catalogs for all y'all to all praise to the Gods The saga continues Wu-Tang, Wu-Tang Olympic torch flaming, we burn so sweet The thrill of victory, the agony, defeat We crush slow, flaming deluxe slow For, judgment day come'th, conquer, it's war Allow us to escape, hell glow spinning bomb Pocket full of shells out the sky, Golden Arms Tune spit the shit immortal combat sound The fake false step make, the blood stain the ground A jungle junkie, vigilante tantrum A death kiss, cap off squeeze another anthem Hold it for ransom, tranquilized with anesthetics My orchestra, graceful, music ballerinas My music Sicily, rich California smell An axe killer adventure, paint a picture well I sing a song from Sing-Sing, sippin' on ginseng Righteous wax chaperon, rotating ring king Watch for the wooden soldiers, see-cypher punks couldn't hold us A thousand men rushing in, not one nigga was sober Perpendicular to the square, we stand bold like Flare Escape from your Dragon's Lair, in particular My beats travel like a vortex, through your spine To the top of your cerebral cortex Make you feel like you bust a nut from raw sex Enter through your right ventricle clog up your bloodstream Or terminal, like Grand Central Station Program fat baselines, on Novation Getting drunk like a fuck I'm duckin' five-year probation War of the masses, the outcome, disastrous Many of the victim family save they ashes A million names on walls engraved in plaques Those who went back, received penalties for their acts Another heart is torn, as close ones gone Those who stray, niggas get slayed on the song The track renders helpless and suffers from multiple stab wounds And leaks sounds that's heard Ninety-three million miles away from came one To represent the Nation, this is a gathering Of the masses that come to pay respects to the Wu-Tang Clan As we engage in battle, the crowd now screams in rage The High Chief Jamel-Ah-Rief take the stage Light is provided through sparks of energy From the mind that travels in rhyme form Giving sight to the blind The dumb are mostly intrigued by the drum Death only one can save shell from This relentless attack of the track spares none Yo! Yo! Yo, fuck that, look at all these crab niggas laid back Lampin' like them gray and black Puma's on my man's rack Codeine was forced in your drink You had a Navy Green salamander fiend, bitches never heard you scream You two-faces, scum of the slum, I got your whole body numb Blowing like Shalamar in eighty-one Sound convincing, thousand dollar court by convention Hands like Sonny Liston, get fly permission hold the Fuck up, Allah fasten your wig, bad luck I humiliate, separate the English from the Dutch It's me, Black Noble Drew Ali Came in threes we like the Genovese Is that so? Caesar needs the greens It's Earth, ninety-three million miles from the first Rough turbulence, the wave burst, split the megahertz Hey yo that's amazing, gun in your mouth talk, verbal foul off Connect thoughts to make my man Shai walk Swift notarizer, Wu-Tang, all up in the high-riser New York gank adviser world tranquilizer Just the dosage, delegate my Clan with explosives While, my pen blow lines ferocious Mediterranean, see ya, the number one traffic Sit down the beat God, then delegate the God to see God The swift chancellor, flex, the white-gold tarantula Track truck diesel, play the weed God, substantiala Max mostly, undivided, then slide it, it's sickening Guaranteed, mad em jump like Rod Strickland"
        }
        if ($("#songSelect").val() === "cream") {
            var str = "What that nigga want God? Word up, look out for the cops (Wu-Tang five finger shit) (Cash Rules) Word up, two for fives over here baby Word up, two for fives them niggas got garbage down the way, word up Know what I'm sayin'? (Cash Rules Everything Around Me C.R.E.A.M. get) Yeah, check this ol' fly shit out Word up (Cash Rules Everything Around Me) Take you on a natural joint (C.R.E.A.M. get the money) Here we here we go (Dolla dolla bill y'all) Check this shit, yo! I grew up on the crime side, the New York Times side Staying alive was no jive At second hands, moms bounced on old men So then we moved to Shaolin land A young youth, yo rockin' the gold tooth, 'Lo goose Only way, I begin to gee off was drug loot And let's start it like this son, rollin' with this one And that one, pullin' out gats for fun But it was just a dream for the teen, who was a fiend Started smokin' woolies at sixteen And running up in gates, and doing hits for high stakes Making my way on fire escapes No question I would speed, for cracks and weed The combination made my eyes bleed No question I would flow off, and try to get the dough all Sticking up white boys in ball courts My life got no better, same damn 'Lo sweater Times is ruff and tuff like leather Figured out I went the wrong route So I got with a sick ass click and went all out Catchin' keys from across seas Rollin in MPV's, every week we made forty G's Yo nigga respect mine, or anger the tech nine Ch-chick-POW! Wu from the gate now Cash, Rules, Everything, Around, Me C.R.E.A.M. Get the money Dollar, dollar bill y'all Cash, Rules, Everything, Around, Me C.R.E.A.M. Get the money Dollar, dollar bill y'all It's been twenty-two long hard years of still strugglin Survival got me buggin, but I'm alive on arrival I peep at the shape of the streets And stay awake to the ways of the world cause shit is deep A man with a dream with plans to make C.R.E.A.M. Which failed I went to jail at the age of 15 A young buck sellin' drugs and such who never had much Trying to get a clutch at what I could not, could not, The court played me short, now I face incarceration Pacin' going up state's my destination Handcuffed in back of a bus, forty of us Life as a shorty shouldn't be so ruff But as the world turns I learned life is hell Living in the world no different from a cell Everyday I escape from Jakes givin' chase, sellin' base Smokin' bones in the staircase Though I don't know why I chose to smoke sess I guess that's the time when I'm not depressed But I'm still depressed, and I ask what's it worth? Ready to give up so I seek the Old Earth Who explained working hard may help you maintain To learn to overcome the heartaches and pain We got stickup kids, corrupt cops, and crack rocks And stray shots, all on the block that stays hot Leave it up to me while I be living proof To kick the truth to the young black youth But shorty's running wild smokin sess drinkin' beer And ain't trying to hear what I'm kickin in his ear Neglected, but now, but yo, it gots to be accepted That what? That life is hectic Cash, Rules, Everything, Around, Me C.R.E.A.M. Get the money Dollar, dollar bill y'all Cash, Rules, Everything, Around, Me C.R.E.A.M. Get the money Dollar, dollar bill y'all Cash, Rules, Everything, Around, Me C.R.E.A.M. Get the money Dollar, dollar bill y'all Cash, Rules, Everything, Around, Me C.R.E.A.M. Get the money Dollar, dollar bill y'all"
        }

        if ($("#songSelect").val() === "bring the ruckus") {
            var str = "Shaolin shadowboxing, and the Wu-Tang sword style If what you say is true, The Shaolin and the Wu-Tang could be dangerous Do you think your Wu-Tang sword can defeat me? En garde, I'll let you try my Wu-Tang style Bring da motherfuckin' ruckus Bring da motherfuckin' ruckus Bring da mother, bring da motherfuckin' ruckus Bring da motherfuckin' ruckus Ghostface, catch the blast of a hype verse My glock bursts, leave in a hearse, I did worse I come rough, tough like an elephant tusk Ya head rush, fly like Egyptian musk Aw shit, Wu-Tang Clan spark the wicks an' However, I master the trick just like Nixon Causin' terror, quick damage ya whole era Hardrocks is locked the fuck up, or found shot P.L.O. style, hazardous, cause I wreck this dangerous I blow sparks like Waco, Texas I watch my back like I'm locked down, hardcore Hittin' sound, watch me act bugged, and tear it down A literate type asshole, songs goin' gold, no doubt And you watch a corny nigga fold Yeah, they fake and all that Carryin' gats but yo, my Clan Rollin like forty Macs Now ya act convinced, I guess it makes sense Wu-Tang, yo sew, represent I wait for one to act up Now I got him backed up Gun to his neck now, react what? And that's one in the chamber Wu-Tang banger, 36 styles of danger Bring da motherfuckin' ruckus Bring da motherfuckin' ruckus Bring da mother, bring da motherfuckin' ruckus Bring da motherfuckin' ruckus I rip it hardcore, like porno-flick bitches I roll with groups of ghetto bastards with biscuits Check it, my method on the microphone's bangin' Wu-Tang slang'll leave your headpiece hangin' Bust this, I'm kickin' like Segal, Out For Justice The roughness, yes, the rudeness, ruckus Redrum, I verbally assault with the tongue Murder one, my style shot ya knot like a stun-gun I'm hectic, I wreck it with the quickness Set it on the microphone, and competition get blown By this nasty ass nigga with my nigga, the RZA Charged like a bull and got pull like a trigga So bad, stabbin' up the pad with the vocab, crab I scream on ya ass like your dad, bring it on Bring da motherfuckin' ruckus Bring da motherfuckin' ruckus Bring da mother, bring da motherfuckin' ruckus Bring da motherfuckin' ruckus Yo, I'm more rugged than slave man boots New recruits, I'm fuckin' up MC troops I break loops, and trample shit, while I stomp! A mud hole in that ass, cause I'm straight out the swamp Creepin' up on site, now it's Fright Night My Wu-Tang slang is mad fuckin' dangerous And more deadly than the stroke of an axe Choppin' through ya back swish Givin' bystanders heart-attacks Niggas try to flip, tell me who is him I blow up his fuckin' prism Make it a vicious act of terrorism You want to bring it, so fuck it Come on and bring the ruckus And I provoke niggaz to kick buckets I'm wettin' cream, I ain't wettin' fame Who sellin' gain, I'm givin' out a deadly game It's not the Russian it's the Wu-Tang crushin' Roulette, slip up and get fucked like Suzette Bring da fuckin' ruckus Bring da motherfuckin' ruckus Bring da motherfuckin' ruckus Bring da mother, bring da motherfuckin' ruckus Bring da motherfuckin' ruckus So bring it on So bring it on So bring it on So bring it on So bring it on So bring it on So bring it on Punk nigga!"
        }
        var wordsPerLine = parseInt($("#words").val());
        var lines = parseInt($("#lines").val());
        e.preventDefault();
        var poemGenerated = generatePoem(str, wordsPerLine, lines);

        $(".rightSide--poem").append("<h1 id='poem'>" + poemGenerated + "</h1");


    })



    function generatePoem(str, wordsPerLine, lines) {
        str = str.toLowerCase();
        str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
        var arr = str.split(' ');
        var poetryLine = '';
        var poem = '';
        var patterns = wordPairs(str, arr);
        console.log(patterns);

        while (lines > 0) {
            var word = randomWord(1, arr.length - 1, arr);
            lines--;
            poem += writeLines(word, patterns, wordsPerLine) + "<br/>";
        }
        return poem;

        function wordPairs(str, arr) {
            var patterns = {};
            //creates object
            for (var i = 0; i < arr.length - 1; i++) {
                if (!patterns[arr[i]]) {
                    patterns[arr[i]] = [arr[i + 1]];
                } else {
                    patterns[arr[i]].push(arr[i + 1]);
                }
            }
            return patterns;
        };

        function writeLines(word, obj, n) {
            wordInObjArr = randomWord(0, obj[word].length - 1, obj[word]);
            if (n <= 1) {
                return word;
            } else {
                console.log(word)
                return (word += ' ' + writeLines(wordInObjArr, obj, n - 1));
            }
        }

        function randomWord(min, max, arr) {
            var random = parseInt(Math.random() * (max - min) + min);
            return arr[random];
        }
    }
});
