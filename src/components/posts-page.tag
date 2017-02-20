import ActionTypes from '../js/actions/action-types';

<posts-page>   
    <h1>Delivering the BVs.</h1>
    <span onclick={ toggleProfanity } class="profanity-filter fa-stack fa-lg">
        <i class="fa fa-stack fa-stack-2x fa-exclamation"></i>
        <i if={ !profane } class="fa fa-stack fa-stack-2x fa-ban"></i>
    </span>
    <hr/>
    <h2>Redux makes me excited</h2>
    <p>I'm probably overblowing this but maybe I'm just in some Redux-induced honeymoon period. I've begun to see
    every webapp issue of state as an opportunity to `npm i redux` and just start `dispatch`ing and `subscribe`ing.
    And so far I don't see any problem with it! I actually hope this cloud of euphoric state management meets a wall
    of over-application-realization so that I can feel like I know when NOT to use Redux... but I really hope that wall 
    is somewhere far from here.
    </p>
    <hr />
    <h2>Riot JS is {profane ? 'fucking' : 'frigging' } neat!</h2>
    <p>So lately I've been using RiotJS for nearly all of my templating concerns and 
    because of this I have completely withheld diving into other libraries/frameworks. 
    Probably to my own detriment.
    <br/><br/>
    Do yourself a favor and try out their starter { profane ? 'shit' : 'stuff' } <a href="http://riotjs.com">Riot</a>.
    </p>
    
    <hr />
    <h2>Using a stock blog engine is { profane ? 'fucking' : 'dang' } boring...</h2>
    <p>I know I could just setup a jekyll. Infact I think I did and never pushed to it :< but I'd just much rather use "blogging" as an excuse to open up my terminal, `git pull` something and open up a code editor. Sue me?</p>

    <hr />
    <h2>The Open Workspace :-?</h2>
    <p>This idea has been the hotfire in tech as long as I've been in it (since 2011) and I'm just now 
    beginning to think it may not be the obvious best choice for everyone, including me. It's hard to quantify 
    the pros & cons; do I really benefit enough from overhearing project conversations to offset the distractions that 
    necessarily accompany the setup? 
    <br/><br/>
    I think answering that starts the conversation about what kind of team culture 
    you have. Are you the kind of team that gathers around a monitor to watch any YouTube video someone pulls up?
    For everybody's sake I hope you have a team that knows how to say "enough { profane ? 'dicking' : 'screwing' } around
    let's knock out some problems". My bottom line is - it's dependent on your team maturity and definitely NOT the automagic decision.
    </p>

    <script>
        this.profane = false;

        this.on('before-mount', () => {
            this.checkProfanity()
        })

        store.subscribe(() => {
            this.checkProfanity()
        })

        toggleProfanity() { 
            store.dispatch({ 
                type: ActionTypes.PROFANITY_TOGGLE, 
                value: !this.profane 
            }) 
        }

        checkProfanity() {
            this.profane = store.getState().isProfane;        
            this.update();
        }
    </script>

    <style scoped=scoped>
        @import './src/scss/variables';

        :scope {
            width: 90vw;

            .profanity-filter {
                position: absolute;
                top: 0;
                right: 0;
                cursor: hand;
            }

            .fa-exclamation {
                color: $red;
            }

            p {
                font-size: 90%;
                font-family: monospace;
            }
        }
    </style>
</posts-page>