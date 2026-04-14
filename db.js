/**
 * NutriFlow Local Database Engine
 * Wraps localStorage to act like a NoSQL document datastore.
 */

const AppDB = {
    // Core Collections Definitions
    collections: {
        USER_PROFILE: 'nf_user_profile',
        SQUADS: 'nf_squads',
        MEAL_PLAN: 'nf_meal_plan',
        SHOPPING_LIST: 'nf_shopping_list',
        NDS_SCORE: 'nf_nds_score'
    },

    // Initialize Database with Defaults if Empty
    init: function() {
        if (!this.get(this.collections.USER_PROFILE)) {
            this.set(this.collections.USER_PROFILE, {
                fullName: "Shivani C.",
                email: "shivani@example.com",
                level: 14,
                title: "Gut Master 🌿"
            });
        }

        if (!this.get(this.collections.SQUADS)) {
            this.set(this.collections.SQUADS, [
                { id: 1, name: "Iron Lifter's Club", members: 3, streak: 12 },
                { id: 2, name: "Marathon Prep", members: 5, streak: 8 }
            ]);
        }

        if (!this.get(this.collections.SHOPPING_LIST)) {
            this.set(this.collections.SHOPPING_LIST, [
                { item: "Organic Spinach", qty: "2 bags", checked: false },
                { item: "Wild Caught Salmon", qty: "500g", checked: false },
                { item: "Almond Milk", qty: "1 carton", checked: false }
            ]);
        }
        
        if (!this.get(this.collections.NDS_SCORE)) {
            this.set(this.collections.NDS_SCORE, 88); 
        }
    },

    // Read Data
    get: function(collection) {
        const data = localStorage.getItem(collection);
        if (!data) return null;
        try {
            return JSON.parse(data);
        } catch (e) {
            return data;
        }
    },

    // Write Data
    set: function(collection, value) {
        localStorage.setItem(collection, JSON.stringify(value));
    },

    // Insert into Array collection
    insert: function(collection, item) {
        const list = this.get(collection) || [];
        list.push(item);
        this.set(collection, list);
        return list;
    },

    // Clear complete Database
    drop: function() {
        Object.values(this.collections).forEach(coll => {
            localStorage.removeItem(coll);
        });
    }
};

// Auto-init on load
AppDB.init();
