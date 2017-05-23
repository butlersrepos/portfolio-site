<experiment-entry>
    <div class="title-bar">
        <i class="caret fa fa-2x { isOpen ? 'fa-caret-down' : 'fa-caret-right' }" onclick={ open }></i>
        <h2 onclick={ open }>{ this.opts.title }</h2>
        <button onclick={ navigate }>Go <i class="icon fa fa-2x fa-{ this.opts.icon }"></i></button>
    </div>
    <section if={ isOpen } name={ this.opts.title }>
        { this.opts.description }
    </section>


    <script>
        this.isOpen = false;
        navigate() { window.location.href = this.opts.url }
        
        open() { this.isOpen = !this.isOpen }
    </script>

    <style scoped="scoped">
        @import './src/scss/variables';

        :scope {
            @include flex-row();
            flex-wrap: wrap;
            justify-content: space-around;
            margin-bottom: 2rem;

            & > * {
                height: 100%;
            }

            .title-bar {
                flex-basis: 100%;
                display: flex;
                align-items: center;
            }

            h2 {
                margin: 0;
                padding: 0 1em;
                flex-basis: 70%;
            }

            .caret { 
                flex-basis: 5%; 
            }

            button {
                flex-basis: 25%;
                @include flex-row();
                background: $ctaColor;
                font-weight: bold;
                justify-content: space-around;
                border-radius: 5px;
                border: 0;
            }

            section {
                flex-basis: 100%;
                font-style: italic;
            }
        }
    </style>
</experiment-entry>