navigation-link(onclick="{ doNavigate }")
    #about-me-nav.permanent-nav.menu-option.js-about-me-nav(data-url="{ url }")
        | { description }
        i(class="nav-icons fa fa-{ icon }")

    script.
        this.description = this.opts.description;
        this.url = this.opts.url;
        this.icon = this.opts.icon;
    
        doNavigate() {
            console.log('NAV CLIKT: ' + this.url);
            riot.route(this.url);
        }

    style(scoped="scoped").
        @import 'src/scss/_colors.scss';
        :scope {
            cursor: pointer;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            background: $colorthree;
            border: 0.1em solid #ddd;
            font-size: 5.5vmin;
            font-weight: bold;
            white-space: nowrap;
            flex-basis: 33.33%;

            &:first-child {
                border-left: none;
            }

            &:last-child {
                border-right: none;
            }

            .nav-icons {
                margin-left: .5rem;
            }
        }